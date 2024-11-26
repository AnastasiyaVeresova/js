const http = require("http");
let counterHome = 0;
let counterAbout = 0;

const server = http.createServer((req, res) => {
	console.log("Запрос получен");

	if (req.url === "/") {
		counterHome++;
		res.writeHead(200, {
			"Content-Type": "text/html; charset=UTF-8",
		});
		res.end(`
            <h1>Добро пожаловать на наш сайт</h1>
            <p>Просмотров: ${counterHome}</p>
            <a href="/about">О нас</a>
        `);
	} else if (req.url === "/about") {
		counterAbout++;
		res.writeHead(200, {
			"Content-Type": "text/html; charset=UTF-8",
		});
		res.end(`
            <h1>О нас</h1>
            <p>Просмотров: ${counterAbout}</p>
            <a href="/">Главная</a>
        `);
	} else {
		res.writeHead(404, {
			"Content-Type": "text/html; charset=UTF-8",
		});
		res.end("<h1>Страница не найдена</h1>");
	}
});

const port = 3000;
server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

// // npm install cookie-parser
// // npm inatall express

// const express = require("express");
// const fs = require("fs");
// const cookieParser = require("cookie-parser");

// // Создаем экземпляр приложения Express
// const app = express();
// // Настройка trust proxy для правильного получения IP-адреса клиента
// app.set("trust proxy", true);

// let users = [];

// app.use(cookieParser());

// // Загрузка данных пользователей из файла при запуске сервера
// try {
//     const data = fs.readFileSync("users.json", "utf8");
//         // users = data
// 		// 			.split("\n")
// 		// 			.filter((line) => line.trim() !== "")
// 		// 			.map((line) => JSON.parse(line));

// 	users = JSON.parse(data);
// } catch (err) {
// 	if (err.code === "ENOENT") {
// 		console.log("Файл пользователей не найден, создаем новый.");
//         fs.writeFileSync("users.json", JSON.stringify(users));
//                 // fs.writeFileSync("users.json", "");

// 	} else {
// 		console.error("Ошибка при чтении файла пользователей:", err);
// 	}
// }

// app.get("/", (req, res) => {
// 	console.log("Запрос получен");

// 	// Парсинг куки
// 	const cookies = req.cookies;
// 	let userId = cookies.userId;

// 	// Если пользователь не идентифицирован, создаем новый идентификатор
// 	if (!userId) {
// 		userId = generateUniqueId();
// 		res.cookie("userId", userId, { httpOnly: true });
// 	}

// 	// Находим пользователя в массиве или создаем нового
// 	let user = users.find((u) => u.id === userId);
// 	if (!user) {
//         const ip =
// 					req.ip || (req.ips && req.ips.length ? req.ips[0] : "Unknown");
// 				user = { id: userId, ip: ip, views: [] };

//         // user = { id: userId, ip: req.ip, views: [] };

// 		users.push(user) ;
// 	}

// 	const view = user.views.find((v) => v.page === "/");
// 	if (view) {
// 		view.count++;
// 	} else {
// 		user.views.push({ page: "/", count: 1 });
// 	}

// 	res.send(`
//         <h1>Добро пожаловать на наш сайт</h1>
//         <p>Просмотров: ${user.views.find((v) => v.page === "/")?.count || 0}</p>
//         <a href="/about">О нас</a>
//     `);

//     // Сохранение данных пользователей в файл после каждого запроса
//     fs.writeFileSync("users.json", JSON.stringify(users));
//         // fs.writeFileSync(
// 		// 			"users.json",
// 		// 			users.map((user) => JSON.stringify(user)).join("\n") + '\n');

// 	// fs.writeFileSync("users.json", JSON.stringify(users, null, 1));//весь массив построчно
// });

// app.get("/about", (req, res) => {
//     console.log("Запрос получен");

//     // Парсинг куки
//     const cookies = req.cookies;
//     let userId = cookies.userId;

//     // Если пользователь не идентифицирован, создаем новый идентификатор
//     if (!userId) {
//         userId = generateUniqueId();
//         res.cookie("userId", userId, { httpOnly: true });
//     }

//     // Находим пользователя в массиве или создаем нового
//     let user = users.find((u) => u.id === userId);
//     if (!user) {
//         const ip =
// 					req.ip || (req.ips && req.ips.length ? req.ips[0] : "Unknown");
// 				user = { id: userId, ip: ip, views: [] };
//         users.push(user);
//     }

//     const view = user.views.find((v) => v.page === "/about");
//     if (view) {
//         view.count++;
//     } else {
//         user.views.push({ page: "/about", count: 1 });
//     }

//     res.send(`
//         <h1>О нас</h1>
//         <p>Просмотров: ${user.views.find((v) => v.page === "/about")?.count || 0
//         }</p>
//         <a href="/">Главная</a>
//     `);

//     // Сохранение данных пользователей в файл после каждого запроса
//     fs.writeFileSync("users.json", JSON.stringify(users));
//     // fs.writeFileSync(
//     //     "users.json",
//     //     users.map((user) => JSON.stringify(user)).join("\n") + '\n');
// });

// app.use((req, res) => {
// 	res.status(404).send("<h1>Страница не найдена</h1>");
// });

// const port = 3000;
// app.listen(port, () => {
// 	console.log(`Сервер запущен на порту ${port}`);
// });

// function generateUniqueId() {
// 	return Math.random().toString(36).substr(2, 9);
// }
