const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google Auth login route
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
// Google Auth Callback Route
router.get('/google/callback', passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect("/user/details")
    })

// Facebook Auth login route
router.get('/facebook', passport.authenticate('facebook'));
// Google Auth Callback Route
router.get('/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect("/user/details")
    })

// Github Auth login route
router.get('/github', passport.authenticate('github'));
// Google Auth Callback Route
router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect("/user/details")
    });

// Logout Route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;