const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.port || 3000);

app.use(express.static("dist"));

app.get("/", (req, res, next) => {
	res.sendFile("./dist/index.html", (err) => {
		console.err(err);
	});
});

app.listen(app.get("port"), (server) => {
	console.info(`Server listen on port ${app.get("port")}`);
});
