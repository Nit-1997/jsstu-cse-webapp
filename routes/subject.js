const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const jwt = require('jsonwebtoken');

// Fetch all subject
router.get('/', (req, res) => {
  Subject.find({})
    .then(subjects => {
      res.json(subjects);
    })
})


// Fetch a user subject
router.get('/:id', (req, res) => {
  Subject.find({ user: req.params.id })
    .then(subjects => {
      res.json(subjects);
    })
})

// adding subject
router.post('/add', (req, res, next) => {
  console.log(req.body)
  const subject = new Subject({
    title: req.body.title,
    year: req.body.year,
    code: req.body.code,
    section: req.body.section,
    user: req.body.user
  })
  subject.save()
    .then(subject => {
      res.status(200).send(subject);
    })
})

// editing subject
router.post('/edit/:id', (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      const { section, title, year, code, user } = req.body;
      subject.section = section;
      subject.title = title;
      subject.year = year;
      subject.code = code;
      subject.user = user
      subject.save()
        .then(subject => {
          res.status(200).send('Subject edited successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Subject doesn\'t exit');
    })
})

// deletion of subject
router.post('/delete/:id', (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      subject.remove()
        .then(subject => {
          res.status(200).send('Subject removed successfully');
        })
    })
    .catch(error => {
      res.status(400).send('Subject doesn\'t exist');
    })
})

module.exports = router;