const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
}, {strict: true});

const Workout = mongoose.model("Workout", WorkSchema);

module.exports = Workout;
