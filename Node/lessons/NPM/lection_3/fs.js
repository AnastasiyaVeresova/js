// Асинхронные функции модуля fs

const fs = require('fs');
fs.readFile('./test.txt', 'utf-8', (error, data) =>{
if (error) {
    console.log(error);
} else {
    console.log(data);
}
});

const fs = require('fs');
fs.readFile(__filename, 'utf-8', (error, data) =>{
if (error) {
    console.log(error);
} else {
    console.log(data);
}
});

const fs = require('fs');
fs.writeFile(__filename, 'console.log("Hello!")', (error, data) =>{
if (error) {
    console.log(error);
} else {
    console.log('The file was saved!');
}
});

const fs = require('fs');
fs.appendFile(__filename, '\nconsole.log("Hello!")', (error) =>{
if (error) {
    console.log(error);
} else {
    console.log('The file was saved!');
}
});

// Cинхронные функции модуля fs

const fs = require('fs');
try {
    const result = fs.readFileSync(__filename, 'utf-8');
} catch (error) {
    console.log(error);
}

try {
    fs.appendFileSync(__filename, '\nconsole.log("Hello")');
    console.log('The file was saved!');
} catch (error) {
    console.log(error);
}
console.log('Hello, World');