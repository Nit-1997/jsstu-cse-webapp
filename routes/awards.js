const express = require('express');
const router = express.Router();
const Award = require('../models/awards');
const jwt = require('jsonwebtoken');

// Fetch all awards
router.get('/', (req, res) => {
  Award.find({})
    .then(awards => {
      res.json(awards);
    })
})


// Fetch a user awards
router.get('/:id', (req, res) => {
  Award.find({ user: req.params.id })
    .sort({ date: -1 })
    .then(awards => {
      res.json(awards);
    })
})

// adding awards
router.post('/add', (req, res, next) => {
  console.log(req.body)
  const awards = new Award({
    title: req.body.title,
    date: req.body.date,
    user: req.body.user
  })
  awards.save()
    .then(awards => {
      res.status(200).send(awards);
    })
})

// editing awards
router.post('/edit/:id', (req, res) => {
  Award.findById(req.params.id)
    .then(awards => {
      const { title, date, user } = req.body;
      awards.title = title;
      awards.date = date;
      awards.user = user
      awards.save()
        .then(awards => {
          res.status(200).send('Awards edited successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Awards doesn\'t exit');
    })
})

// deletion of awards
router.post('/delete/:id', (req, res) => {
  Award.findById(req.params.id)
    .then(awards => {
      awards.remove()
        .then(awards => {
          res.status(200).send('Awards removed successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Awards doesn\'t exist');
    })
})

module.exports = router;