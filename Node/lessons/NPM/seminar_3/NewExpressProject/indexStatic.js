const express = require("express");
// const path = require("path");
const app = express();
// const port = 3000;

app.use(express.static("static"));

app.listen(3000);

// app.listen(port, () => {
// 	console.log(`Server is running on http://localhost:${port}`);
// });
