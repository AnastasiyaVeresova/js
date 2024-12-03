const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
function readCounter(filePath) {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return {};
}

function writeCounter(filePath, counters) {
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2), 'utf8');
}

const counterFilePath = path.join(__dirname, 'counters.json');

let counters = readCounter(counterFilePath);

app.get('/', (req, res) => {
    counters['/'] = (counters['/'] || 0) + 1;
    writeCounter(counterFilePath, counters);
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counters['/']}</p><a href="/about">Ссылка на About</a>`);
});

app.get('/about', (req, res) => {
    counters['/about'] = (counters['/about'] || 0) + 1;
    writeCounter(counterFilePath, counters);
    res.send(`<h1>О нас</h1><p>Просмотров: ${counters['/about']}</p><a href="/">Ссылка на /</a>`);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}`);
});
