const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require('dotenv').config();

var multer = require('multer');
var storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter })

var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.post("/create", upload.single('image'), function (req,res,next) {
  console.log(req.body);
  var userObj = {
    username: req.body.email,
    password: req.body.password,
    name: req.body.name,
    designation: req.body.designation,
    mode: req.body.mode
  };
  cloudinary.uploader.upload(req.file.path, function (result) {
    // add cloudinary url for the image to the campground object under image property
    console.log(result);
    image = result.secure_url;
    userObj.image = image;
    User.findOne({ username: req.body.email }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err)
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        })
      }
      else {
        User.create(userObj, function (err, newlyCreated) {
          if (err) {
            res.json(err)
          } else {
            console.log(newlyCreated);
            res.json(newlyCreated)
          }
        })
      }
    })

  });
});


router.get('/getUser', function (req, res, next) {
    console.log('authorised');
    console.log(req.user);
    res.json(req.user);
});


module.exports = router;






