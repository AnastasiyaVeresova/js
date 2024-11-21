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

function regularFunction() {
    console.log(this);
}
const arrowfunction = () => {
    console.log(this);
}
regularFunction();

arrowfunction();

const obj = {
    regularMethod: function() {
        console.log(this);
    },
    arrowMethod: () => {
        console.log(this);
    }
}

obj.regularMethod();
obj.arrowMethod;

const result = (a, b) => a + b;
arr.filter(item => item > 3);