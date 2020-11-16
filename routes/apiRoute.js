const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({type: "workout"})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(res);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
//this route is to 'Add Exercise'
//I had empty object when using id and params. body and params worked (ish)
  router.put("/api/workouts/:id", function({body, params}, res) {
   Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
     console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });



  module.exports = router;