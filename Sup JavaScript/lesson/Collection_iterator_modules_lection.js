// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
    title: '1984',
    author: 'George Orwell'
};

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book, reviewSymbol, 'Отличная книга о дистопии!');
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, 'dystopia');

console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));


// --------------------------------------------------------

const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'Brave', author: 'Aldous' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury' }
];

books[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: books[this.current++] } : { done: true };
        }
    }
}
for (let book of books) {
    console.log(`Название: ${book.title}, Автор: ${book.author}`);
}

// --------------------------------------------------------

const divElements = Array.from(document.querySelectorAll('div'));
const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));

activeDivs.forEach(element => {
    console.log(element);
})

// --------------------------------------------------------

const lessons = new Map();
lessons.set('Математика', 'Смирнов');
lessons.set('История', 'Иванов');

const ivanLessons = new Set().add('Математика').add(' История');

const students = new Map();
students.set('Иван', ivanLessons);

console.log(`Преподаватель по Математике: ${lessons.get('Математика')}`);
console.log(`Уроки Ивана: ${[...students.get('Иван') ]}`);