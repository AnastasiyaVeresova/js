const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "person.json");
const personData = JSON.parse(fs.readFileSync(pathToFile, "UTF-8"));

personData.age = personData.age - 5;
personData.age = personData.age + 10;

personData.city = 'Moscow';

if (!personData.birthdate) {
	personData.birthdate = "1993-01-01"; 
}


fs.writeFileSync(pathToFile, JSON.stringify(personData, null, 2)
);
