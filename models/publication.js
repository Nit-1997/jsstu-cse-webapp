const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PublicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    user: {
        type: String,
        required: true
    }
})

const Publication = mongoose.model('publications', PublicationSchema);
module.exports = Publication;