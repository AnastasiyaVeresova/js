"use strict";

let data = [];

// Функция для отображения расписания занятий
function displaySchedule(schedule) {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';

    schedule.forEach((classItem, index) => {
        const classCard = document.createElement('div');
        classCard.classList.add('col-md-4', 'class-item');
        classCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${classItem.name}</h5>
                    <p class="card-text">Время: ${classItem.time}</p>
                    <p class="card-text">Макс. участников: ${classItem.maxParticipants}</p>
                    <p class="card-text">Текущие участники: ${classItem.currentParticipants}</p>
                    <button class="btn btn-primary enroll-btn" data-index="${index}" ${classItem.currentParticipants >= classItem.maxParticipants ? 'disabled' : ''}>Записаться</button>
                    <button class="btn btn-danger unenroll-btn" data-index="${index}" ${classItem.currentParticipants <= 0 ? 'disabled' : ''}>Отменить запись</button>
                </div>
            </div>
        `;
        scheduleContainer.appendChild(classCard);
    });

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.enroll-btn').forEach(button => {
        button.addEventListener('click', handleEnroll);
    });

    document.querySelectorAll('.unenroll-btn').forEach(button => {
        button.addEventListener('click', handleUnenroll);
    });
}

// Функция для обработки записи на занятие
function handleEnroll(event) {
    const index = event.target.getAttribute('data-index');
    if (data[index].currentParticipants < data[index].maxParticipants) {
        data[index].currentParticipants++;
        updateScheduleOnServer(data);
        displaySchedule(data);
    }
}

// Функция для обработки отмены записи на занятие
function handleUnenroll(event) {
    const index = event.target.getAttribute('data-index');
    if (data[index].currentParticipants > 0) {
        data[index].currentParticipants--;
        updateScheduleOnServer(data);
        displaySchedule(data);
    }
}

// Функция для обновления расписания на сервере
function updateScheduleOnServer(schedule) {
    fetch('/update-schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    })
    .then(response => response.text())
    .then(message => console.log(message))
    .catch(error => console.error('Error:', error));
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    fetch('/get-schedule')
        .then(response => response.json())
        .then(scheduleData => {
            data = scheduleData;
            displaySchedule(data);
        })
        .catch(error => console.error('Error:', error));
});
