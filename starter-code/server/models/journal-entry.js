'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const journalSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model('journal',journalSchema);
