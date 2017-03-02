const express       = require('express');
const router        = express.Router();

const JournalEntry = require('../../models/journal-entry');

/* GET Phones listing. */
router.get('/', (req, res, next) => {
  JournalEntry.find({})
    .exec((err, entries) => {
      if (err) {
        return res.send(err);
      }
      return res.json(entries);
    });
});

module.exports = router;
