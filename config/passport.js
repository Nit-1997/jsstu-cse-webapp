const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');

const keys = require('./keys');

// User model
const User = mongoose.model('users');

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

// Google Authentication Strategy
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, (accessToken, refreshToken, profile, done) => {
            // console.log(profile);
            const newUser = {
                googleID: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            }

            User.findOne({
                googleID: profile.id
            }).then(user => {
                if (user) {
                    done(null, user)
                } else {
                    // Create user
                    new User(newUser)
                        .save()
                        .then(user => done(null, user));
                }
            })
        })
    )

    // Facebook Authentication Strategy
    passport.use(new FacebookStrategy({
            clientID: keys.facebook_App_ID,
            clientSecret: keys.facebook_App_Secret,
            callbackURL: "https://jssstucse.herokuapp.com/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'email']
        },
        (accessToken, refreshToken, profile, cb) => {
            // console.log(profile);
            const newUser = {
                facebookID: profile.id,
                name: profile.displayName,
                image: "https://graph.facebook.com/" + profile.id +"/picture?type=normal"
            }

            User.findOne({
                facebookID: profile.id
            }).then(user => {
                if (user) {
                    cb(null, user)
                } else {
                    // Create user
                    new User(newUser)
                        .save()
                        .then(user => cb(null, user));
                }
            })
        }
    ));

    // Github Authentication Strategy
    passport.use(new GitHubStrategy({
            clientID: keys.github_Client_ID,
            clientSecret: keys.github_Client_Secret,
            callbackURL: "/auth/github/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            // console.log(profile);
            const newUser = {
                githubID: profile.id,
                name: profile.displayName,
                image: profile.photos[0].value,
                email: profile.profileUrl
            }

            User.findOne({
                githubID: profile.id
            }).then(user => {
                if (user) {
                    cb(null, user)
                } else {
                    // Create user
                    new User(newUser)
                        .save()
                        .then(user => cb(null, user));
                }
            })
        }
    ));
}