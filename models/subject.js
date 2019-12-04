const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
})

const Subject = mongoose.model('subjects', SubjectSchema);
module.exports = Subject;