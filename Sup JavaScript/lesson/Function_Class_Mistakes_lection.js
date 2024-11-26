// console.log(window);
// const newWindow = window.open('https://www.example.com', '_blank'); //открывает новое окно браузера  (window подобно self)
// // window.close(); //закрывает текущее окно
// // window.resizeTo(800, 600);
// // window.location.href = 'https://www.example.com'; //перенаправляет на другую страницу

// const windowWidth = window.innerWidth; //получить ширину окна

// constIsWindowOpen = window.window.open('https://www.example.com') !== null; // проверяет открыто ли окно
// window.window.location.href = 'https://www.example.com'; // перенаправляет на другую страницу во вложенном окне

// --------------------------------------frames

// const frame = frame[0]; //получает ссылку на фрейм по индексу
// frame[0].location.href = 'https://www.example.com'; //перенаправление во фрейме на другую страницу
// const frameCount = frames.length; //получает количество фреймов на странице
// const parentWindow = window.parent; //получает доступ к родительскому окну из фрейма

// --------------------------------------globalThis
// const globalObject = globalThis; //получает глобальный объект
// globalThis.newVariable = 'Hello'; //определяет глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; //получает доступ к глобальным переменным из разных сред исполнения

// --------------------------------------глобальная переменная var почти не используется

// var glob = 5;

// function increment(val) {
//     return val + 1;
// }
// console.log(window.glob);
// console.log(window.increment);

// --------------------------------------alert

// console.log(alert() === window.alert()); //true
// alert("Можно так");
// window.alert('А можно и так');

// --------------------------------------const и let

// const local = 5;
// let localFunc = () => 'localFunc';
// console.log(local); //5
// console.log(localFunc()); //localFunc
// console.log(window.local); //undefined
// console.log(window.localFunc); //undefined

// console.log(window.Symbol.for); //ƒ for() { [native code] }
// console.log(window.Symbol.iterator); //Symbol(Symbol.iterator)
// console.log(window.Array.from); //ƒ from() { [native code] }

// --------------------------------------

// function sayHello() {
//     console.log('Hello!');
// }

// console.log(sayHello.name); //sayHello
// console.log(window.name);
// // console.log(frames[0].name);

// const obj = {};
// console.log(obj.name);

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
// const rect = new Rectangle(10, 5);
// console.log(rect.constructor.name); //Rectangle

// --------------------------------------

// function regularFunction() {
//     console.log(this);
// }
// const arrowfunction = () => {
//     console.log(this);
// }
// regularFunction();

// arrowfunction();

// const obj = {
//     regularMethod: function() {
//         console.log(this);
//     },
//     arrowMethod: () => {
//         console.log(this);
//     }
// }

// obj.regularMethod();
// obj.arrowMethod;

// const result = (a, b) => a + b;
// arr.filter(item => item > 3);

// // --------------------------------------
// class AutoMobile {
//     _horsePowers = 0;

//     set horsePowers(value) {
//         if (value < 0) throw new Error(console.log('Отрицательное количество сил'));
//         this._horsePowers = value;
//     }
//     get horsePowers() {
//         return this._horsePowers;
//     }
//     constructor(power) {
//         this._horsePowers = power;

//     }
// }
// let auto = new AutoMobile(100);
// auto.horsePowers = -10;
// auto.horsePowers = 10;

// -----------------------------------------
// class AutoMobile {
//     #horsePowers = 0;
//     set horsePowers(value) {
//         if (value < 0) throw new Error("Отрицательное количество сил");
//         this.#horsePowers = value;
//     }
//     get horsePowers() {
//         return this.#horsePowers;
//     }
//     constructor(power) {
//         this.#horsePowers = power;
//     }
// }

// let auto = new AutoMobile(100);
// auto.horsePowers = 40;
// console.log(auto.horsePowers); //50
// // auto.#horsePowers = 70;

// -----------------------------------------instanceof

// class Animal {
//     constructor(name) {
//         this.name = name;
// }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Woof!");
//     }
// }

// const animal = new Animal("Animal");
// const dog = new Dog("Dog");

// console.log(animal instanceof Animal);//true
// console.log(dog instanceof Animal);//true
// console.log(dog instanceof Dog);//true
// console.log(animal instanceof Dog);//false
// console.log(dog instanceof Cat);

// -----------------------------------------

// const user = {
// 	name: "John",
// 	age: 29,
// 	address: {
//         city: "Leningrad",
//         street: '3rd May Street'
// 	},
//     contacts: {
//         email: "7474747@gmail.com",
//         phone: +79115675656,
//     }
// };
// const email = user?.contacts?.email;
// console.log(email);



// const defaultValue = user?.otherValue ?? 'Default Value';
// console.log(defaultValue);

// const streetName = user?.address?.street ?? 'Unknoun';
// console.log(streetName);

// -----------------------------------------Ошибки

// try {
//     undefined = 2;
// } catch {
//     console.log('Что-то случилось');
// } finally {
//     console.log('Всё прекрасно');
// }

// -----------------------------------------
// function divideNumbers(a, b) {
//     try {
//         const result = a / b;
//         if (isNaN(result)) {
//             throw new Error(`Результат ${result} не является числом`)
//         } console.log('Результат деления: ', result);
//     } catch (error) {
//         console.log('Ошибка деления', error);
//     } finally {
//         console.log('Операция деления завершена');
//     }
// }
// divideNumbers(10, 2);
// divideNumbers(10, 0);

// -----------------------------------------

// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//             this.name = 'CustomError';
//         }
//     }


// function validateNumber(value) {
//     if (typeof value !== 'number') {
//         throw new CustomError('Значение должно быть числом');
//     }
//     console.log('Валидация успешна');
// }

// try {
//     validateNumber([31]);
// } catch (error) {
//     if (error instanceof CustomError) {
//         console.log('Ошибка: ', error.message);
//         console.log('Тип ошибки: ', error.name);
//     } else {
//         console.log('Произошла ошибка: ', error);
//     }
// }

// -----------------------------------------

const App = {};
class User {#
    _name;
    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
}
App.registerUser = (name, email, password) => {
    try {
        if (!name || !email || !password) {
            throw new Error('Не все данные были введены');
        }

        const user = new User(name);
        const userData = {
            name: user.getName(),
            email,
            password
        };
        console.log('Пользователь успешно зарегистрирован: ', user.getName());
        console.log('Дополнительные данные пользователя: ', userData);
    } catch (error) {
        console.log('Ошибка регистрации: ', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
};
App.registerUser('Миша', '7338473984@ya.ru', 'pass12345')
App.registerUser("Ашим", "7338473984@ya.ru");