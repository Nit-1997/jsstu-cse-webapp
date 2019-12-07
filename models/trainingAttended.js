const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrainingAttendedSchema = new Schema({
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

const TrainingAttended = mongoose.model('trainingAttended', TrainingAttendedSchema);
module.exports = TrainingAttended;