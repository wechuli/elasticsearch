const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const countryRouter = require("./routes/countryRoutes");

const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/country", countryRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Page not foune" });
});
app.listen(8080, () =>
  console.log("Server is listening to requests at port 8080")
);
