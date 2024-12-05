const Joi = require('joi');

// const schema = Joi.string();
// const result = schema.validate('Hello!');
// // console.log(JSON.stringify(result, null, 2));
// console.log(result.error.details);

const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});
const result = schema.validate({
    id: 1,
    title: '1',
    content: '1234567890',
});
console.log(result.error?.details);

