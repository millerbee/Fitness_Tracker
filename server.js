const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//const { Workout } = require("./models/index.js");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const db = mongoose.connection;
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });


app.use(require("./routes/apiRoute.js"));
app.use(require("./routes/htmlRoute.js"));


// using tutorial from book to log a message when db donnection occurs, Jonathan Wexler - Get rogramming with NodeJS-
db.once("open", () =>{
    console.log("Connected to MongoDB using mongoose!");

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  