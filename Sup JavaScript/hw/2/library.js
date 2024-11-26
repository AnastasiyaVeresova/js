// your code goes here
class Library {
	#books;

	constructor(initialBooks = []) {
		if (new Set(initialBooks).size !== initialBooks.length) {
			throw new Error("Первоначальный список книг содержит дубликаты.");
		}
		this.#books = initialBooks;
	}

	get allBooks() {
		return this.#books;
	}

	addBook(title) {
		if (this.#books.includes(title)) {
			throw new Error(`Книга с заголовком "${title}" уже существует.`);
		}
		this.#books.push(title);
	}

	removeBook(title) {
		const index = this.#books.indexOf(title);
		if (index === -1) {
			throw new Error(`Книга с заголовком "${title}" отсутствует.`);
		}
		this.#books.splice(index, 1);
	}

	hasBook(title) {
		return this.#books.includes(title);
	}
}

// Пример использования
try {
	const library = new Library(["Book1", "Book2"]);
	console.log(library.allBooks); // ['Book1', 'Book2']
	library.addBook("Book3");
	console.log(library.allBooks); // ['Book1', 'Book2', 'Book3']
	console.log(library.hasBook("Book2")); // true
	library.removeBook("Book8");
	console.log(library.allBooks); // ['Book1', 'Book3']
} catch (error) {
	console.error(error.message);
}
