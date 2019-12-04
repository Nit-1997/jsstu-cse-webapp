const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrainingSchema = new Schema({
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

const Training = mongoose.model('trainings', TrainingSchema);
module.exports = Training;