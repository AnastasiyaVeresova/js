const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});