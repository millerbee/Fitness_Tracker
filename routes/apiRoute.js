const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
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

router.put("/api/workouts/:id",  (req,res)=>{
  Workout.findByIdAndUpdate()
  .then(({ body }) => db.Workout.findByIdAndUpdate({}, { $push: { exercises: body } }, { new: true }))
  .then(dbWorkout => {
    res.json(dbWorkout);
   
  })
  .catch(err => {
    res.json(err);
  });
});

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