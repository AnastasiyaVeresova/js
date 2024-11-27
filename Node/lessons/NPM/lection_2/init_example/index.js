const uuid = require('uuid');
const hello = require('./first-module');
const id = uuid.v4();
console.log(id);

hello.sayHello();


