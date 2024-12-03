const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

function readCounters(filePath) {
	if (fs.existsSync(filePath)) {
		const data = fs.readFileSync(filePath, "utf8");
		return JSON.parse(data);
	}
	return {};
}

function writeCounters(filePath, counters) {
	fs.writeFileSync(filePath, JSON.stringify(counters, null, 2), "utf8");
}

const counterFilePath = path.join(__dirname, "counters.json");

let counters = readCounters(counterFilePath);

// Обработчик для главной страницы
app.get("/", (req, res) => {
	// Увеличиваем счетчик для корневой страницы
	counters["/"] = (counters["/"] || 0) + 1;
	writeCounters(counterFilePath, counters);
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Корневая страница</title>
            <style>
            *{margin: 0;
            auto: 0;}
                body {
                    font-family: Arial, sans-serif;
                    margin: 18px;
                }
                h1, p, a {
                    margin-bottom: 20px;
                }                
                form {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Корневая страница</h1>
            <p>Просмотров: ${counters["/"]}</p>
            <a href="/about">Ссылка на страницу /about</a>
            <form action="/reset" method="POST">
                <button  type="submit">Очистить счетчик</button>
            </form>
        </body>
        </html>
    `);
});

// Обработчик для страницы "About"
app.get("/about", (req, res) => {
	counters["/about"] = (counters["/about"] || 0) + 1;
	writeCounters(counterFilePath, counters);
	// Отправляем ответ с текущим значением счетчика
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Корневая страница</title>
            <style>
            *{margin: 0;
            auto: 0;}
                body {
                    font-family: Arial, sans-serif;
                    margin: 18px;
                }
                h1, p, a {
                    margin-bottom: 20px;
                }                
                form {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>О нас</h1>
            <p>Просмотров: ${counters["/"]}</p>
            <a href="/">Ссылка на страницу /</a>
            <form action="/reset" method="POST">
                <button  type="submit">Очистить счетчик</button>
            </form>
        </body>
        </html>
    `);
});

// Обработчик для сброса счетчика
app.post("/reset", (req, res) => {
	counters["/"] = 0;
	counters["/about"] = 0;
	writeCounters(counterFilePath, counters);
	res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту http://localhost:${PORT}`);
});
