// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 reject('Ошибка генерации случайного числа');
//             }
//         }, 1000);
//     });
// };

// generateRandomNumber()
//     .then((number) => {
//         console.log('Сгенерировано случайное число: ', number);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });

// --------------------------------------

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     });
// };

// fetchData('https://randombig.cat/roar.json')
//     .then((data) => {
//         console.log('Получены данные: ', data);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });

// --------------------------------------
// let checkIfFileExists = (file) => {

// };

// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkIfFileExists(file);
//             if (fileExists) {
//                 resolve('Файл существует');
//             } else {
//                 reject('Файл не существует');
//             }
//         }, 2000);
//     });
// };

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });

// --------------------------------------

// let calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;
//         resolve(sum);
//     });
// };
// calculateSum(5, 2)
//     .then((result) => {
//         console.log('Cумма чисел: ', result);
//     });

// --------------------------------------

// let divideNumbers = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		if (b === 0) {
// 			reject("Невозможно делить на 0");
// 		} else {
// 			resolve(a / b);
// 		}
// 	});
// };
// divideNumbers(5, 3)
//     .then((result) => {
//         console.log("Результат деления: ", result);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });

// --------------------------------------
// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
// });
// --------------------------------------finally

// let processData = (data) => {

// };
// let performOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         let result = processData(data);

//         if (result) {
//             resolve(result);
//         } else {
//             reject('Ошибка операции');
//         }
//     }).finally(() => {
//         console.log('Операция завершена');
//     });
// };

// performOperation('example')
//     .then((result) => {
//         console.log('Результат операции: ', result);
//     })
//     .catch((error) => {
//         console.log('Ошибка', error);
//     });

// --------------------------------------
// Promise.all([
// 	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
// 	new Promise((resolve, reject) =>
// 		// setTimeout(() => reject(new Error("Ошибка")), 2000)
// 		setTimeout(() => resolve(2), 2000)
// 	),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
// 	.then(console.log)
//     .catch(console.log);

// //--------------------------------------
// let checkServerResponse = (urls) => {
//     let promises = urls.map((url) => fetch(url));

//     return Promise.race(promises)
//         .then((response) => {
//             return response.url;
//         });
// };

// let urls = [
//     'https://api.example.com/server1',
//     'https://api.example.com/server2',
//     'https://api.example.com/server3'
// ];
// checkServerResponse(urls)
//     .then((fastestServer) => {
//     console.log('Самый быстрый сервер: ', fastedServer);
//     })
// .catch ((error) => {

// })

//--------------------------------------cookie

// let setCookie = (name, value, days) => {
//     let expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + days);
//     let cookieValue =
//         encodeURIComponent(value) + "; expires" + expirationDate.toUTCString();
//     document.cookie = name + "=" + cookieValue;
// };
// setCookie("username", "Kati", 5);
// setCookie("userinfo", "Miss", 8);
// setCookie("userinfo2", "Less", 8);


//--------------------------------------

// let getCookie = (name) => {
//     let cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         let [cookieName, cookieValue] = cookie.trim().split('=');
//         if (cookieName === name) {
//             return decodeURIComponent(cookieValue);
//         }
//     }
//     return null;
// };
// let username = getCookie('username');
// console.log('Значение cookie "username":', username);

// let deleteCookie = (name) => {
//     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// };
// deleteCookie('userinfo2');

//--------------------------------------Storage

// const { AsyncLocalStorage } = require("async_hooks");

// localStorage.setItem('username', 'John'); //установка значения localStorage
// //получение значения из localStorage
// let storedUsername = localStorage.getItem('username');
// console.log('Значение из localStorage: ', storedUsername);
// //удаление значения из localStorage
// localStorage.removeItem('username');
// //проверка что значение удалено
// let storedUserName2 = localStorage.getItem('username');
// console.log('Значение из localStorage: ', storedUserName2);
// //очистка localStorage
// localStorage.clear();
// //проверка, что localStorage пустой
// console.log('localStorage: ', localStorage);
//--------------------------------------

// if (localStorage.getItem('counter')) {
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// } else {
//     localStorage.setItem('counter', '1');
// }
// console.log('Счетчик посещений: ', localStorage.getItem('counter'));

// localStorage.clear();

//--------------------------------------
// Создаем div для счетчика
const counterDiv = document.createElement('div');
counterDiv.className = 'counter';
counterDiv.textContent = '0';

// Создаем кнопку для увеличения счетчика
const incrementButton = document.createElement('button');
incrementButton.className = 'increment';
incrementButton.textContent = 'Увеличить счетчик';

// Создаем input для ввода пункта
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'item-input';
inputField.placeholder = 'Введите пункт';

// Создаем кнопку для добавления пункта
const addButton = document.createElement('button');
addButton.id = 'add-button';
addButton.textContent = 'Добавить';

// Создаем список для пунктов
const itemList = document.createElement('ul');
itemList.id = 'item-list';

// Добавляем все элементы на страницу
document.body.appendChild(counterDiv);
document.body.appendChild(incrementButton);
document.body.appendChild(inputField);
document.body.appendChild(addButton);
document.body.appendChild(itemList);

// -----------------------------------------------

// Проверяем, есть ли значение счетчика в localStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
    counterDiv.textContent = counter;
};

counterDiv.textContent = counter;

incrementButton.addEventListener('click', updateCounter);

// -----------------------------------------------
// 		//получение ссылок на элементы страницы
// const inputField = document.getElementById('item-input');
// const addButton = document.getElementById('add-button');
// const itemList = document.getElementById('item-list');

// Получаем сохраненный список покупок (если есть)
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

const updateShoppingList = () => {
    itemList.innerHTML = ''; // Очищаем список покупок на сайте
    // Создаем новые элементы списка для каждого пункта
    shoppingList.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
    // Сохраняем обновленный список покупок в localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
};

addButton.addEventListener('click', () => {
    const newItem = inputField.value.trim();
    if (newItem !== '') {
        shoppingList.push(newItem);
        inputField.value = '';
        updateShoppingList();
    }
});

updateShoppingList(); // Обновляем список покупок при загрузке страницы

//--------------------------------------генераторы

function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

const generator = numberGenerator();
console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value); //3
console.log(generator.next().value); //4