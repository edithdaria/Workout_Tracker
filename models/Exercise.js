const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        enum: ["resistance", "cardio"],
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
    }
}, {strict: true});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;