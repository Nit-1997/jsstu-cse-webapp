const express = require('express');
const router = express.Router();
const Research = require('../models/research');
const jwt = require('jsonwebtoken');

// Fetch all research
router.get('/', (req, res) => {
  Research.find({})
    .then(researchs => {
      res.json(researchs);
    })
})


// Fetch a user research
router.get('/:id', (req, res) => {
  Research.find({ user: req.params.id })
    .sort({ date: -1 })
    .then(researchs => {
      res.json(researchs);
    })
})

// adding research
router.post('/add', (req, res, next) => {
  console.log(req.body)
  const research = new Research({
    author: req.body.author,
    title: req.body.title,
    link: req.body.link,
    date: req.body.date,
    user: req.body.user
  })
  research.save()
    .then(research => {
      res.status(200).send(research);
    })
})

// editing research
router.post('/edit/:id', (req, res) => {
  Research.findById(req.params.id)
    .then(research => {
      const { author, title, link, date, user } = req.body;
      research.author = author;
      research.title = title;
      research.link = link;
      research.date = date;
      research.user = user
      research.save()
        .then(research => {
          res.status(200).send('Research edited successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Research doesn\'t exit');
    })
})

// deletion of research
router.post('/delete/:id', (req, res) => {
  Research.findById(req.params.id)
    .then(research => {
      research.remove()
        .then(research => {
          res.status(200).send('Research removed successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Research doesn\'t exist');
    })
})

module.exports = router;