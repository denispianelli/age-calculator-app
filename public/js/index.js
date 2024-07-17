const app = {
  dayInput: document.querySelector('.form__input:nth-child(1)'),
  monthInput: document.querySelector('.form__input:nth-child(2)'),
  yearInput: document.querySelector('.form__input:nth-child(3)'),
  isValidDay: true,
  isValidMonth: true,
  isValidYear: true,
  init: function () {
    const dayInput = document.getElementById('day');
    dayInput.addEventListener('input', app.handleDayInput);

    const monthInput = document.getElementById('month');
    monthInput.addEventListener('input', app.handleMonthInput);

    const yearInput = document.getElementById('year');
    yearInput.addEventListener('input', app.handleYearInput);

    const form = document.querySelector('.form');
    form.addEventListener('submit', app.handleSubmit);
  },
  handleSubmit: function (event) {
    const dayInputValue = document.getElementById('day').value;
    const monthInputValue = document.getElementById('month').value;
    const yearInputValue = document.getElementById('year').value;

    if (dayInputValue === '') {
      event.preventDefault();
      app.dayInput.classList.add('form__input--err');
    } else if (!app.isValidDay) {
      event.preventDefault();
    }

    if (monthInputValue === '') {
      event.preventDefault();
      app.monthInput.classList.add('form__input--err');
    } else if (!app.isValidMonth) {
      event.preventDefault();
    }

    if (yearInputValue === '') {
      event.preventDefault();
      app.yearInput.classList.add('form__input--err');
    } else if (!app.isValidYear) {
      event.preventDefault();
    }
  },
  handleDayInput: function (event) {
    const dayInputValue = event.currentTarget.value;

    if ((dayInputValue < 1 || dayInputValue > 31) && dayInputValue !== '') {
      app.dayInput.classList.add('form__input--invalid-day');
      app.isValidDay = false;
    } else if (dayInputValue === '') {
      app.dayInput.classList.add('form__input--err');
    } else {
      app.dayInput.classList.remove(
        'form__input--invalid-day',
        'form__input--err',
        'form__input--invalid-date'
      );
      app.isValidDay = true;
    }
  },
  handleMonthInput: function (event) {
    const monthInputValue = event.currentTarget.value;

    if (
      (monthInputValue < 1 || monthInputValue > 12) &&
      monthInputValue !== ''
    ) {
      app.monthInput.classList.add('form__input--invalid-month');
      app.isValidMonth = false;
    } else if (monthInputValue === '') {
      app.monthInput.classList.add('form__input--err');
    } else {
      app.monthInput.classList.remove(
        'form__input--invalid-month',
        'form__input--err',
        'form__input--invalid-date'
      );
      app.isValidMonth = true;
    }
  },
  handleYearInput: function (event) {
    const yearInputValue = event.currentTarget.value;
    const currentYear = new Date().getFullYear();

    if (yearInputValue === '') {
      app.yearInput.classList.add('form__input--err');
    }
    if (yearInputValue > currentYear) {
      app.yearInput.classList.add('form__input--invalid-year');
      app.isValidYear = false;
    } else {
      console.log('year valid');
      app.yearInput.classList.remove(
        'form__input--invalid-year',
        'form__input--err',
        'form__input--invalid-date'
      );
      app.isValidYear = true;
    }
  },
};

window.addEventListener('DOMContentLoaded', app.init);
