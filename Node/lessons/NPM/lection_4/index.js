// const express = require("express");
// const app = express();

// const articles = [
// 	{ title: "Article 1", description: "First awesome article" },
// 	{ title: "Article 2", description: "Second awesome article" },
// 	{ title: "Article 3", description: "Third awesome article" },
// ];

// app.get("/", (req, res) => {
// 	const pathToTemplate = path.join(__dirname, "/templates/home.handlers");
// 	FileSystem.readFile(pathToTemplate, "utf8", (err, data) => {
// 		if (err) {
// 			res.status(500);
// 			res.send(err.message);
// 		} else {
// 			const template = Handlebars.compile(data);
// 			res.send(template({ articles }));
// 		}
// 	});
// });
// app.listen(3000);


// ----------------------------------------------------

const express = require("express");
const { engine } = require('express-handlebars');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('view', './views');

const articles = [
	{ title: "Article 1", description: "First awesome article" },
	{ title: "Article 2", description: "Second awesome article" },
	{ title: "Article 3", description: "Third awesome article" },
];

app.get("/", (req, res) => {
    res.render('home', { layout: "index", title: 'Home', articles });
});
app.listen(3000);
