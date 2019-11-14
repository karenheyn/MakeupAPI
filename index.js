const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
app.use(require("./lib/routes/index"));

app.listen(4000, () => console.log("listening..."));
