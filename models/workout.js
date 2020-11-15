const mongoose = require("mongoose");
//mongoose to enforce the schema

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    //following the seeds file to set up the 'table' of data: day, type, name, duration, weight, reps and sets

        day: {
            type: Date,
            default: Date.now
        },
        
        exercises: [
            {
                type: String,
                required: "Value required",
                trim: true,
                unique: true
            },
            {
                name: String,

            }
        ]

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;