const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a post request!</h1>');
});

app.put('/', (req, res) => {
    res.send(req.body);
});

app.delete('/', (req, res) => {
    res.send(req.body);
});


app.listen(3000);