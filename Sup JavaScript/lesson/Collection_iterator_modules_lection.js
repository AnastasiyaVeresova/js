// let obj = {
//     animal: 'dog'
// }

// let obj2 = obj;
// obj = null;
// console.log(obj); //null
// console.log(obj2); //{animal: 'dog'}

// // ------------------------------------------------

// const symbol = Symbol();
// const dogId = Symbol('dog');
// console.log(dogId); //Symbol(dog)
// console.log(dogId.description); //dog

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');
// console.log(dog1); //Symbol(dog)
// console.log(dog2); //Symbol(dog)
// console.log(dog1 == dog2); //false

// // ----------------------------------------

// // let id = Symbol('dogId');
// let id = Symbol('id');

// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]); //Жучка
// buddy[id] = 'Бобик';
// console.log(buddy[id]); //Бобик

// // ----------------------------------------

// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',

//     elephant: 'Слон'
// }
// console.log(buddies); //{elephant: 'Слон', Symbol(Жучка): 'Жучка', Symbol(Мурка): 'Мурка', Symbol(Таракашка): 'Таракашка'}

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // скопирует все свойства в тч и символьные

// buddies.cat = 'Барсик';
// console.log(newBuddies); //{elephant: 'Слон', Symbol(Жучка): 'Жучка', Symbol(Мурка): 'Мурка', Symbol(Таракашка): 'Таракашка'}

// console.log(buddies); //{elephant: 'Слон', cat: 'Барсик', Symbol(Жучка): 'Жучка', Symbol(Мурка): 'Мурка', Symbol(Таракашка): 'Таракашка'}

// // ----------------------------------------Symbol.for

// // читаем символ из глобального реестра и записываем его в переменную
// let id2 = Symbol.for("id2");

// // читаем его снова и записываем в другую переменную (возможно из другого места кода)
// let idAgain = Symbol.for("id2");

// // проверяем это один и тот же символ
// alert(id2 === idAgain); //true

// // ----------------------------------------Symbol.keyfor
// // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // получаем имя по символу
// console.log(Symbol.keyFor(sym)); //name
// console.log(Symbol.keyFor(sym2)); //id

// ----------------------------------------Итерируемые объекты

// const string = 'Hello';
// console.log(string[2]); //l
// console.log(string.length); //5

// for (let str of string) {
//     console.log(str);
// }

// let range = {
//     from: 1,
//     to: 17
// }
// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,
//         next() {
//             return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//         }
//     };
// };

// for (let number of range) {
//     console.log(number);
// }

// ----------------------------------------

// let range2 = {
//     from: 1,
//     to: 17,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//     }
// };
// for (let number of range2) {
//     console.log(number);
// }

// ----------------------------------------

// let pseudo = {
//     0: 'first',
//     1: 'second',
//     2: 'third',
//     length: 3
// }

// let array = Array.from(pseudo);
// console.log(array); //(3) ['first', 'second', 'third']
// console.log(array.pop()); //third

// let pseudo2 = 'It`s Array Like!'
// let array2 = Array.from(pseudo2);
// console.log(array2); //(16) ['I', 't', '`', 's', ' ', 'A', 'r', 'r', 'a', 'y', ' ', 'L', 'i', 'k', 'e', '!']

// ----------------------------------------Коллекции

let map = new Map();
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
// console.log(map); //Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}

// --------------------------------------

console.log(map.get(1)); //num1
console.log(map.get("1")); //str1
console.log(map.get(true)); //bool1
console.log(map.size); //3

// --------------------------------------

// let map = new Map();
map.set("1", "We")
    .set(1, "likes")
    .set(true, "JS");
console.log(map); //Map(3) {'1' => 'We', 1 => 'likes', true => 'JS'}

// --------------------------------------
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
])
console.log(recipeMap); //Map(3) {'огурец' => 500, 'помидор' => 350, 'лук' => 50}

for (let vegetables of recipeMap.keys()) {
    console.log(vegetables); // огурец    помидор     лук    
}

for (let amount of recipeMap.values()) {
    console.log(amount); // 500    350     50   
}

for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()

    console.log(entry); // (2) ['огурец', 500]     ["помидор", 350],       ["лук", 50]

}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500    помидор: 350     лук: 50
});

// ----------------------------------------Работа с объектами

// let map2 = new Map(Object.entries(obj)); //поможет создать map из объекта
// let obj = Object.fromEntries(map2); // поможет создать объект из map

// ---------------------------------------

let puppy = [
    'Жучка',
    'Тузик',
    'Буся',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Маня',
    'Тузик',
];

let uniqueBuddies = new Set(puppy);
console.log(uniqueBuddies); //Set(6) {'Жучка', 'Тузик', 'Буся', 'Бобик', 'Валера', …}

let arr = Array.from(uniqueBuddies);
console.log(arr); //(6) ['Жучка', 'Тузик', 'Буся', 'Бобик', 'Валера', 'Маня']

// ---------------------------------------Модули

// import { name as title, draw as picture } from './modules/square.js';

export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

import { name, draw, reportArea, reportPerimeter } from './modules/square.js'
import * as Square from './modules/square.js'; //Импортировать все что можно