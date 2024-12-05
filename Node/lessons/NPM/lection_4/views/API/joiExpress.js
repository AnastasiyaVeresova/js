const express = require('express');
const Joi = require('joi');
const app = express();

const idSchema = Joi.object({
    id: Joi.number().required(),
});

app.get('/articles/:id', (req, res) => {
    const idValidationResult = idSchema.validate(req.params);
    if(idValidationResult.error) {
        return res.status(400)
        .send(idValidationResult.error.details);
    }
    res.send({articles});
});

