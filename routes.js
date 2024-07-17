const express = require('express');
const calculateAge = require('./calculateAge.js');
const isValidDate = require('./validateDate.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', isValidDate, (req, res) => {
  const ageInDuration = calculateAge(req);

  res.render('result', {
    ageInDuration,
  });
});

module.exports = router;
