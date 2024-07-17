const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

function isValidDate(req, res, next) {
  const now = dayjs();
  const birthDate = `${req.body.year}-${req.body.month}-${req.body.day}`;
  const isValid = dayjs(birthDate, 'YYYY-MM-DD', true).isValid();
  const isFutureDate = dayjs(birthDate).isAfter(now);

  if (isValid && !isFutureDate) {
    next();
  } else {
    res.render('invalidDate', {
      year: req.body.year,
      month: req.body.month,
      day: req.body.day,
    });
  }
}

module.exports = isValidDate;
