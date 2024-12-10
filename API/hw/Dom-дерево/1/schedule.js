"use strict";

const scheduleData = `[
    {
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "name": "Фитнес",
        "time": "12:00 - 13:00",
        "maxParticipants": 15,
        "currentParticipants": 10
    },
    {
        "name": "Пилатес",
        "time": "14:00 - 15:00",
        "maxParticipants": 8,
        "currentParticipants": 8
    }
]`;

// Преобразование строки JSON в объект JavaScript
const data = JSON.parse(scheduleData);

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
        displaySchedule(data);
    }
}

// Функция для обработки отмены записи на занятие
function handleUnenroll(event) {
    const index = event.target.getAttribute('data-index');
    if (data[index].currentParticipants > 0) {
        data[index].currentParticipants--;
        displaySchedule(data);
    }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    displaySchedule(data);
});
