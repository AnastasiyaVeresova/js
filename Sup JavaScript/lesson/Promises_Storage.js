// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).
    
    // const newsDatabase = [
    //     { title: "Новость 1", content: "Содержание новости 1" },
    //     { title: "Новость 2", content: "Содержание новости 2" },
    //     { title: "Новость 3", content: "Содержание новости 3" }
    // ];

    // function fetchNews() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (Math.random() < 0.1) {
    //                 reject(new Error("Ошибка загрузки новостей"));
    //             } else {
    //                 resolve(newsDatabase);
    //             }
    //         }, 2000);
    //     });
    // }

    // const button = document.querySelector('.load-button');
    // const newsContainer = document.querySelector('.news-container');

    // button.addEventListener('click', () => {
    //     button.disabled = true;
    //     newsContainer.innerHTML = ''; // Очистка контейнера перед загрузкой новых новостей

    //     fetchNews()
    //         .then(news => {
    //             news.forEach(article => {
    //                 const newsItem = document.createElement('div');
    //                 newsItem.className = 'news-item';
    //                 newsItem.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    //                 newsContainer.appendChild(newsItem);
    //             });
    //         })
    //         .catch(error => {
    //             const errorMessage = document.createElement('div');
    //             errorMessage.className = 'error';
    //             errorMessage.textContent = error.message;
    //             newsContainer.appendChild(errorMessage);
    //         })
    //         .finally(() => {
    //             button.disabled = false;
    //         });
    // });


    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -task2
//     Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

// document.addEventListener('DOMContentLoaded', () => {
//     const userInput = document.getElementById('userInput');
//     const saveButton = document.getElementById('saveButton');
//     const loadButton = document.getElementById('loadButton');
//     const clearButton = document.getElementById('clearButton');
//     const output = document.getElementById('output');

//     saveButton.addEventListener('click', () => {
//         const text = userInput.value;
//         if (text) {
//             const savedText = localStorage.getItem('savedText') || '';
//             const newText = savedText + '\n' + text;
//             localStorage.setItem('savedText', newText);
//             output.textContent = 'Текст сохранен!';
//         } else {
//             output.textContent = 'Введите текст для сохранения.';
//         }
//     });

//     loadButton.addEventListener('click', () => {
//         const savedText = localStorage.getItem('savedText');
//         if (savedText) {
//             output.textContent = savedText;
//         } else {
//             output.textContent = 'Нет сохраненного текста.';
//         }
//     });

//     clearButton.addEventListener('click', () => {
//         localStorage.removeItem('savedText');
//         output.textContent = 'Сохраненный текст удален.';
//     });
// });


// -------------------------------------------------------------------task3

// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.

// document.addEventListener('DOMContentLoaded', () => {
//     const tableSelect = document.getElementById('table');
//     const chairSelect = document.getElementById('chair');
//     const sofaSelect = document.getElementById('sofa');
//     const saveButton = document.getElementById('save');
//     const clearButton = document.getElementById('clear');
//     const resultDiv = document.getElementById('result');

//     // Загрузка сохраненных настроек при загрузке страницы
//     const loadSettings = () => {
//         const savedSettings = localStorage.getItem('furnitureSettings');
//         if (savedSettings) {
//             const settingsArray = JSON.parse(savedSettings);
//             displayResults(settingsArray);
//         }
//     };

//     // Отображение выбранных комплектов
//     const displayResults = (settingsArray) => {
//         resultDiv.innerHTML = settingsArray.map(settings => `
//             <div>
//                 <p>Стол: ${getOptionText(tableSelect, settings.table)}</p>
//                 <p>Стул: ${getOptionText(chairSelect, settings.chair)}</p>
//                 <p>Диван: ${getOptionText(sofaSelect, settings.sofa)}</p>
//             </div>
//         `).join('');
//     };

//     // Получение текста опции по значению
//     const getOptionText = (selectElement, value) => {
//         const option = Array.from(selectElement.options).find(opt => opt.value === value);
//         return option ? option.text : '';
//     };

//     // Сохранение настроек
//     saveButton.addEventListener('click', () => {
//         const settings = {
//             table: tableSelect.value,
//             chair: chairSelect.value,
//             sofa: sofaSelect.value
//         };
//         const savedSettings = localStorage.getItem('furnitureSettings');
//         const settingsArray = savedSettings ? JSON.parse(savedSettings) : [];
//         settingsArray.push(settings);
//         localStorage.setItem('furnitureSettings', JSON.stringify(settingsArray));
//         displayResults(settingsArray);
//     });

//     // Очистка настроек
//     clearButton.addEventListener('click', () => {
//         localStorage.removeItem('furnitureSettings');
//         resultDiv.textContent = 'Выбор не сделан. Предыдущие настройки удалены.';
//         tableSelect.value = tableSelect.options[0].value;
//         chairSelect.value = chairSelect.options[0].value;
//         sofaSelect.value = sofaSelect.options[0].value;
//     });

//     // Загрузка сохраненных настроек при загрузке страницы
//     loadSettings();
// });

// -------------------------------------------------------------------task4
// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
// систему, используя данные, сохраненные в LocalStorage.
// Приложение будет состоять из трёх основных страниц:
// 1. Страница регистрации:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ После ввода данных, они сохраняются в LocalStorage.
// ○ Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
// на страницу приветствия.
// ○ Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// ○ Простое приветственное сообщение для авторизованного пользователя.
// ○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const output = document.getElementById('output');

    // Регистрация
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                output.textContent = 'Регистрация успешна! Перенаправляем на страницу входа...';
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                output.textContent = 'Пожалуйста, заполните все поля.';
            }
        });
    }

    // Вход
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');
            if (username === savedUsername && password === savedPassword) {
                output.textContent = 'Вход успешен! Перенаправляем на страницу приветствия...';
                setTimeout(() => {
                    window.location.href = 'welcome.html';
                }, 2000);
            } else {
                output.textContent = 'Неверный логин или пароль.';
            }
        });
    }

    // Выход
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            window.location.href = 'login.html';
        });
    }
});





   