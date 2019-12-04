const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AwardSchema = new Schema({
  title: {
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

const Award = mongoose.model('awards', AwardSchema);
module.exports = Award;