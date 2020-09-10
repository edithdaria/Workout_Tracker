const db = require("../models");

module.exports = function (app) {

  app.post("/api/workouts", ({ body }, res, next) => {
    db.Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});

  app.get("/api/workouts", (req, res, next) => {
      db.Workout.find({})
          .then(workouts => {
              res.json(workouts);
          })
          .catch(err => {
              console.log(err);
              next(err);
          });
  });



}
