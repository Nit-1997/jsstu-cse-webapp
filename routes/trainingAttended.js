const express = require('express');
const router = express.Router();
const Training = require('../models/trainingAttended');
const jwt = require('jsonwebtoken');

// Fetch all trainings
router.get('/', (req, res) => {
  Training.find({})
    .then(trainings => {
      res.json(trainings);
    })
})


// Fetch a user trainings
router.get('/:id', (req, res) => {
  Training.find({ user: req.params.id })
    .sort({ date: -1 })
    .then(trainings => {
      res.json(trainings);
    })
})

// adding trainings
router.post('/add', (req, res, next) => {
  console.log(req.body)
  const trainings = new Training({
    title: req.body.title,
    date: req.body.date,
    user: req.body.user
  })
  trainings.save()
    .then(trainings => {
      res.status(200).send(trainings);
    })
})

// editing trainings
router.post('/edit/:id', (req, res) => {
  Training.findById(req.params.id)
    .then(trainings => {
      const { title, date, user } = req.body;
      trainings.title = title;
      trainings.date = date;
      trainings.user = user
      trainings.save()
        .then(trainings => {
          res.status(200).send('Trainings edited successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Trainings doesn\'t exit');
    })
})

// deletion of trainings
router.post('/delete/:id', (req, res) => {
  Training.findById(req.params.id)
    .then(trainings => {
      trainings.remove()
        .then(trainings => {
          res.status(200).send('Trainings removed successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Trainings doesn\'t exist');
    })
})

module.exports = router;