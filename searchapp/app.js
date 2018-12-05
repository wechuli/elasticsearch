const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
