const dayjs = require('dayjs');
require('dayjs/locale/fr');

dayjs.locale('fr');

function calculateAge(req) {
  const birthYear = req.body.year;
  const birthMonth = req.body.month;
  const birthDay = req.body.day;

  const currentYear = dayjs().year();
  const currentMonth = dayjs().month() + 1;
  const currentDay = dayjs().date();

  let ageInYears = currentYear - birthYear;
  let ageInMonths = currentMonth - birthMonth;
  let ageInDays = currentDay - birthDay;

  // Adjust for negative months: If the current month is earlier than the birth month.
  if (currentMonth < birthMonth) {
    ageInYears--;
    ageInMonths += 12;
  }

  // Adjust for negative days: If the current day is earlier in the month than the birth day.
  if (currentDay < birthDay) {
    ageInMonths--;

    // Determine leap years between birth year and current year
    let leapYears = 0;
    for (let year = birthYear; year < currentYear; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears++;
      }
    }

    // Determine the number of days in the previous month
    const daysInPreviousMonth = [
      31,
      28 + leapYears,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][currentMonth - 2];

    ageInDays += daysInPreviousMonth - birthDay + currentDay;
  }

  return {
    birthYear: req.body.year,
    birthMonth: req.body.month,
    birthDay: req.body.day,
    years: ageInYears,
    months: ageInMonths,
    days: ageInDays,
  };
}

module.exports = calculateAge;
