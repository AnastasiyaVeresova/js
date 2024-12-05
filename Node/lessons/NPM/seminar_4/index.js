const express = require('express');
const Joi = require('joi');
const app = express();

const users = [];
let uniqueID = 0;

const userSchema = Joi.object ({
    firstName: Joi.string().min(1).required(),
    secondName: Joi.string().min(1).required(),
    city: Joi.string().min(1).max(150),
    age: Joi.number().min(0).required()

})

app.use(express.json());

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user){
     res.send({ user });
    }else {
     res.status(404);
     res.send({ user: null });
    }});

app.get('/users', (req, res) => {
    res.send({ users });
});

app.post('/users', (req, res) => {
    uniqueID += 1;
    users.push({
        id: uniqueID,
        ...req.body
    });
    res.send({ id: uniqueID });
});

app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);
    if (result.error){
        return  res.status(404).send({error: result.error.details});
    }
   const userId = +req.params.id;
   const user = users.find(user => user.id === userId);
   if (user){
    const{ firstName, secondName, city, age} = req.body;
    user.firstName = firstName;
    user.secondName = secondName;
    user.city = city;
    user.age = age;
    res.send({ user });
   }else {
    res.status(404);
    res.send({ user: null });
   }
});

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if (user){
const userIndex = users.indexOf(user);
users.splice(userIndex, 1);
     res.send({ user });
    }else {
     res.status(404);
     res.send({ user: null });
    }
 });


app.listen(3000);

// body postman
// "firstName": "Vasya",
// "secondName": "Pupkov",
// "city": "Belgorod",
// "age": 65
