const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idSchema, articleSchema } = require('./validation/schema');
const app = express();
// const Joi = require('joi');

// app.get('/', (req, res) => {
//     res.send('Hello!');
// });
let uniqueID = 0;
const articles = [];
// ------------------------------

// const articleSchema = Joi.object({
//     title: Joi.string().min(5).required(),
//     content: Joi.string().min(10).required(),
// })

// const idSchema = Joi.object({
//     id: Joi.number().required(),
// });

app.use(express.json());

app.get('/articles/:id', (req, res) => {
    const idValidationResult = idSchema.validate(req.params);
    if(idValidationResult.error) {
        return res.status(400)
        .send(idValidationResult.error.details);
    }
    res.send({articles});
});


// ------------------------------

//Get all articles
app.get('/articles', (req, res) => {
    res.send({articles});
});

// Get article
app.get('/articles/:id', checkParams(idSchema), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    if (article) {
        res.send({article});
    }else{
        res.status(404);
        res.send({article:null});
    }
});

// Create article
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID,
    });
});

// Update article
app.put('/articles/:id', checkParams(idSchema), checkBody(articleSchema), (req, res) => {
    // const idValidationResult = idSchema.validate(req.params);
    // if (idValidationResult.error) {
    //     return res.status(400).send(idValidationResult.error.details);
    // }
    // const articleValidationResult = articleSchema.validate(req.body);
    // if (articleValidationResult.error) {
    //     return res.status(400).send(articleValidationResult.error.details);
    // }
    const article = articles.find((article) => article.id === Number(req.params.id));
    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article});
    }else{
        res.status(404);
        res.send({article:null});
    }
});
// Remove article
app.delete('/articles/:id', checkParams(idSchema), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({article});
    }else{
        res.status(404);
        res.send({article:null});
    }
});

// Обработчик несуществующих роутов

app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    })
});


//// Create article + validation

// app.post('/articles', (req, res) => {
//    if (!req.body.title){
//     return res.status(400).send({
//         error: 'Invalid title',
//     });
//    }

//    if (!req.body.content){
//     return res.status(400).send({
//         error: 'Invalid content',
//     });
//    }

//    if (req.body.title.length <= 5){
//     return res.status(400).send({
//         error: 'The title must be more than 5 characters',
//     });
//    }

//    if (!req.body.content.length <= 10){
//     return res.status(400).send({
//         error: 'The content must be more than 10 characters',
//     });
//    }
   
//    uniqueID += 1;

//    articles.push({
//        id: uniqueID,
//        ...req.body
//    });

//    res.send({
//        id: uniqueID,
//    });
// });

app.listen(3000);