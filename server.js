//server setup
const express = require("express");

//log
const logger = require("morgan");

//mongodb
const mongoose = require("mongoose");

//port
const PORT = process.env.PORT || 3080;

//server startup
const app = express();

//logger middleware
app.use(logger("dev"));

//json and url parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serving static content
app.use(express.static("public"));

//connecting to mongodb atlas
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", { useNewUrlParser: true });

//serverside api calls
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//listening to port to start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

