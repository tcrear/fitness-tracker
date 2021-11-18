const router = require('express').Router();
const { Workout } = require("../models")

router.get('/api/workouts', function (req, res, next) {
    Workout.find({})
    .then(workoutData => {
        res.json(workoutData)
    })
})

router.get('/api/workouts/range', function (req, res, next) {
    Workout.find({})
    .then(workoutData => {
        res.json(workoutData)
    })
})

router.put('/api/workouts/:id', function (req, res, next) {
    let idToFind = req.params.id;
    let informationToUpdate = req.body;

    Workout.findByIdAndUpdate({_id: idToFind}, {
        $push: {exercises: informationToUpdate}
    })
    .then(workoutData => {
        res.json(workoutData)
    })
})

router.post('/api/workouts', function (req, res, next) {
    Workout.create({})
    .then(workoutData => {
        res.json(workoutData)
    })
})

module.exports = router;