const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');


router.get('/getUser', function(req, res, next) {
   console.log('authorised');
   console.log(req.user);
    res.json(req.user);
});


module.exports = router;