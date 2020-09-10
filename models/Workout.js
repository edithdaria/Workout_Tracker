const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      enum: ["resistance", "cardio"],
      required: true,
  },
  name: {
      type: String,
      trim: true
  },
  duration: {
      type: Number,
      min: 0
  },
  weight: {
      type: Number,
      min: 0
  },
  reps: {
      type: Number,
      min: 0
  },
  sets: {
      type: Number,
      min: 0
  }  }]
}, {strict: true});

const Workout = mongoose.model("Workout", WorkSchema);

module.exports = Workout;
