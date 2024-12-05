const handlebars = require('handlebars');

const template = handlebars.compile(
`{{#if Bold}}<b>Привет_да!</b> {{else}} <p>Привет_нет!</p>{{/if}}`
);
console.log(template({ bold: true }));
console.log(template({bold: false}));