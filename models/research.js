const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResearchSchema = new Schema({
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

const Research = mongoose.model('researchs', ResearchSchema);
module.exports = Research;