// Создайте новый проект Node.js:
// Откройте терминал и выполните следующие команды:

// mkdir my-express-app
// cd my-express-app
// npm init -y
// Установите Express:
// Установите Express с помощью npm:

// npm install express
// Создайте файл app.js:
// Создайте файл app.js (или любое другое имя, которое вам нравится) и добавьте в него следующий код:


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Запустите приложение:
// Запустите ваш Express-сервер, выполнив следующую команду в терминале:

// node app.js

const http = require('http');
// const port = 3000;

const server = http.createServer((req, res) => {
  console.log('the request has been received');

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8',
  });
  res.end('<h1>Добро пожаловать на сайт!</h1>');

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ------------------------------------------------------

const express = require('express');
// const app = express();
// const port = 3000;

// Middleware для логирования
app.use((req, res, next) => {
  console.log(`Поступил запрос: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Добро пожаловать на сайт!');
});

app.get('/about', (req, res) => {
  res.send('<h1>Страница обо мне</h1>');
});

// Middleware для обработки ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`);
});

// ------------------------------------------------------
const express = require('express');
const path = require('path');
// const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

// const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`);
});

// ------------------------------------------------------cтатичная обработка

const express = require('express');
const path = require('path');
// const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('static/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});