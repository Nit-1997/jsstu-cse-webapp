const express = require('express');
const router = express.Router();
const Publication = require('../models/publication');
const jwt = require('jsonwebtoken');

// Fetch all publication
router.get('/', (req, res)=> {
    Publication.find({})
    .then(publications => {
        res.json(publications);
    })
})

// adding publication
router.post('/add', (req, res, next) => {
    const publication = new Publication({
        author: req.body.author,
        title: req.body.title,
        link: req.body.link,
        date: req.body.date
    })
    publication.save()
        .then(publication => {
            res.status(200).send(publication);
        })
})

// editing publication
router.post('/edit/:id', (req, res) => {
    Publication.findById(req.params.id)
        .then(publication => {
            const { author, title, link, date } = req.body;
            publication.author = author;
            publication.title = title;
            publication.link = link;
            publication.date = date;
            publication.save()
                .then(publication => {
                    res.status(200).send('Publication edited successfully');
                })
        })
        .catch(error => {
            res.status(400).send('Publication doesn\'t exit');
        })
})

// deletion of publication
router.post('/delete/:id', (req, res) => {
    Publication.findById(req.params.id)
        .then(publication => {
            publication.remove()
                .then(publication => {
                    res.status(200).send('Publication removed successfully');
                })
        })
        .catch(error => {
            res.status(400).send('Publication doesn\'t exist');
        })
})

module.exports = router;