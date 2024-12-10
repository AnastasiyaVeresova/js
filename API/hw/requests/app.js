"use strict";

const apiKey = "4yAKbd1YAjQWkPjT1qUjSh3IesREoBQUBTt_h5phW0Q"; // API-ключ
const photoElement = document.getElementById('photo');
const photographerNameElement = document.getElementById('photographer-name');
const likeBtn = document.getElementById('like-btn');
const likeCountElement = document.getElementById('like-count');
const historyContainer = document.getElementById('history-container');

let currentPhoto = null;
let likeCount = 0;
let photoHistory = [];

// Функция для получения случайного изображения из Unsplash
async function fetchRandomPhoto() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
    const data = await response.json();
    return data;
}

// Функция для отображения изображения и информации о фотографе
function displayPhoto(photo) {
    photoElement.src = photo.urls.regular;
    photographerNameElement.textContent = photo.user.name;
    currentPhoto = photo;
}

// Функция для обновления счетчика лайков
function updateLikeCount() {
    likeCountElement.textContent = likeCount;
    localStorage.setItem('likeCount', likeCount);
}

// Функция для добавления изображения в историю просмотров
function addToHistory(photo) {
    const historyItem = document.createElement('div');
    historyItem.classList.add('history-item');
    historyItem.innerHTML = `
        <img src="${photo.urls.thumb}" alt="${photo.user.name}">
        <p>Photographer: ${photo.user.name}</p>
    `;
    historyContainer.appendChild(historyItem);
}

// Функция для сохранения истории фотографий в localStorage
function savePhotoHistory() {
    localStorage.setItem('photoHistory', JSON.stringify(photoHistory));
}

// Функция для загрузки истории фотографий из localStorage
function loadPhotoHistory() {
    const savedHistory = localStorage.getItem('photoHistory');
    if (savedHistory) {
        photoHistory = JSON.parse(savedHistory);
        photoHistory.forEach(photo => addToHistory(photo));
    }
}

// Обработчик события для кнопки "лайк"
likeBtn.addEventListener('click', () => {
    likeCount++;
    updateLikeCount();
});

// Инициализация
document.addEventListener('DOMContentLoaded', async () => {
    likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    updateLikeCount();

    loadPhotoHistory();

    const photo = await fetchRandomPhoto();
    displayPhoto(photo);
    addToHistory(photo);
    photoHistory.push(photo);
    savePhotoHistory();
});
