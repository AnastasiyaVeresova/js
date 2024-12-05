const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
let users = [];

const dataFilePath = path.join(__dirname, './users.json');


try {
	const data = fs.readFileSync("users.json", "utf8");

	users = JSON.parse(data);
} catch (err) {
	if (err.code === "ENOENT") {
		console.log("Файл пользователей не найден, создаем новый.");
		fs.writeFileSync("users.json", JSON.stringify(users));
	} else {
		console.error("Ошибка при чтении файла пользователей:", err);
	}
}

function readData() {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

const userSchema = Joi.object({
    id: Joi.number().integer().min(1).optional(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required()
});

function isUniqueId(users, id) {
    return !users.some(user => user.id === id);
}

// Получение всех пользователей
router.get('/', (req, res) => {
    const users = readData();
    res.json(users);
});

// Получение пользователя по ID
router.get('/:id', (req, res) => {
    const users = readData();
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Создание нового пользователя
router.post('/', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const users = readData();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    if (!isUniqueId(users, newId)) {
        return res.status(400).json({ message: 'ID must be unique' });
    }

    const newUser = {
        id: newId,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    writeData(users);
    res.status(201).json(newUser);
});

// Обновление пользователя по ID
router.put('/:id', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    let users = readData();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        writeData(users);
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Удаление пользователя по ID
router.delete('/:id', (req, res) => {
    let users = readData();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        const deletedUser = users[index]; // Сохраняем данные удаленного пользователя
        users.splice(index, 1);
        writeData(users);
        //         res.json({ message: 'User deleted:', user: deletedUser });

        // Формируем строку с нужными данными
        const responseMessage = `User deleted: id=${deletedUser.id}, name=${deletedUser.name}, age=${deletedUser.age}`;
        res.send(responseMessage);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
