const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// UserSchema
const User = mongoose.model('users');

// Details of the user
router.get('/details', async(req, res)=> {
    try{
        const user = await User.findOne({_id: req.user.id});
        res.json(user);
    }catch(error) {
        console.error(error.message);
        res.status(500).send('server Error');
    }
})

module.exports = router;