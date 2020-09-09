const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname + "./../public/index.html"));
    });
  
    app.get("/stats", (req, res) => {
      res.sendFile(path.join(__dirname + "./../public/stats.html"));
    });
  
    // a new route is created to manage a seperate newOrder.handlebars file.
    app.get("/exercise", (req, res) => {
      res.sendFile(path.join(__dirname + "./../public/exercise.html"));
    });

  };
  