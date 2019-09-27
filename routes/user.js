const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('../passport');

var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
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
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: '', 
  api_key:"", 
  api_secret:""
});

router.post("/create",upload.single('image'),function(req,res){
      console.log(req);
      var userObj = {
        username:req.body.email,
        password:req.body.password,
        name:req.body.name,
        year:req.body.year,
        branch:req.body.branch,
        college:req.body.college,
        image:req.body.image
      };
    cloudinary.uploader.upload(req.file.path, function(result) {
                                // add cloudinary url for the image to the campground object under image property
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
                                       User.create(userObj, function(err, newlyCreated) {
                                                  if (err) {
                                                    res.json(err)
                                                }else{
                                                  console.log(newlyCreated);
                                                  res.json(newlyCreated)
                                              }
                                          })
                                     }
                                }) 

                            });           
}); 


//login logic
router.post( '/login',function (req, res, next) {
        console.log('login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/getUserInfo', (req, res) => {
    User.find({username:req.body.username},function(err,user){
      if(err){
        console.log(err);
      } 
      else{
        console.log(user);
        res.json(user);
      }
    });
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        console.log('logged out');
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router;