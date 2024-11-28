const myLibrary = require("./function");

const randomNames = [
	"Anastasiya",
	"Yuliya",
	"Fedor",
	"Nikita",
	"Aleksey",
	"Olga",
	"Elena",
	"Vladimir",
	"Vladislav",
	"Aleksandr",
	"Petr",
];
const randomAddresses = [
	"195196 Main St",
	"123654 Second St",
	"456372 Third St",
	"786286 Forth St",
	"902354 Fifth St",
	"929292 Six St",
	"745634 Seven St",
	"912867 Eight St",
	"234165 Nine St",
	"324516 Ten St",
	"907823 Eleven St",
];

const randomName = myLibrary.getRandomName(randomNames);
const randomAddress = myLibrary.getRandomAddress(randomAddresses);

console.log(`${randomName}, ${randomAddress}`);
