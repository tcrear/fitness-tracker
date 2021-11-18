const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
    },

    exercises: [
        {
            type: {
            type: String,   
            required: "Type of Excercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Name of Exercise"
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                require: "Length of Workout"
            },
            distance: {
                type: Number,
                require: "Distance of Workout"
            },
        },
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;