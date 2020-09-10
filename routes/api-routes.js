const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);

            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);

            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);

            });
    });


    app.get("/api/workouts/range", (req, res) => {
        let findDay = new Date();
        findDay = findDay.setDate(findDay.getDate() - 7);
        db.Workout.find({ day: { $gte: findDay } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
    });

}
