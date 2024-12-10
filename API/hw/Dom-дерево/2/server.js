const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'scheduleData.json');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/get-schedule', (req, res) => {
    console.log('Received request for /get-schedule');
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading schedule data:', err);
            // Если файл не существует, создаем его с данными по умолчанию
            const defaultData = [
                {
                    "name": "Йога",
                    "time": "10:00 - 11:00",
                    "maxParticipants": 10,
                    "currentParticipants": 0
                },
                {
                    "name": "Фитнес",
                    "time": "12:00 - 13:00",
                    "maxParticipants": 15,
                    "currentParticipants": 0
                },
                {
                    "name": "Пилатес",
                    "time": "14:00 - 15:00",
                    "maxParticipants": 8,
                    "currentParticipants": 0
                }
            ];
            fs.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2), (err) => {
                if (err) {
                    console.error('Error writing default schedule data:', err);
                    return res.status(500).send('Ошибка при создании файла данных по умолчанию');
                }
                res.json(defaultData);
            });
        } else {
            console.log('Schedule data read successfully');
            res.json(JSON.parse(data));
        }
    });
});


// Конечная точка для обновления данных расписания
app.post('/update-schedule', (req, res) => {
    const updatedData = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Ошибка записи в файл');
        }
        res.send('Файл успешно обновлен');
    });
});

app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});
