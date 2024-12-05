const handlebars = require("handlebars");

const items = [
	{ name: "first item", number: 3 },
	{ name: "second item", number: 8 },
];
const template = handlebars.compile(
	`{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}`
);
console.log(template({items}));