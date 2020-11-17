const mongoose = require("mongoose");
//mongoose to enforce the schema

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    //following the seeds file to set up the 'table' of data: day, type, name, duration, weight, reps,sets and distance where applicable.

        day: {
            type: Date,
            default: Date.now 
        },
        
        exercises: [
            
            {
                type: {
                type: String,
                required: "Select exercise type",
                trim: true,
               
            },
               name: {
                type: String,
                required: "Enter name of exercise",
                trim: true
            },
                weight: {
                type: Number,
                require: "Enter weight in lbs"
            },
                sets: {
                type: Number,
                required: "Enter number of sets"
            },
                reps: {
                type: Number,
                required: "Enter number of reps"
            },
                duration: {
                type: Number,
                default: 0,
                required: "Enter duration in minutes"
            },
                distance: {
                    type: Number,
                    required: "Enter distance in miles"
                }, 
                  
            }]

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;