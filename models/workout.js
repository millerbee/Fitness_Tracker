const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    
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
            }
        ]

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;