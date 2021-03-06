import moment from 'moment';

export const getPrevMonthYear = (month, year) => {
  return {
    month: month === 1 ? 12 : month - 1,
    year: month === 1 ? year - 1 : year,
  };
};

export const getNextMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: month + 1,
      year,
    };
  }
  if (month === 12) {
    return {
      month: 2,
      year: year + 1,
    };
  }

  return {
    month: 12,
    year,
  };
};

export const getDaysInMonth = (month, year) => {
  return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
};

export const getFirstWeekdayOfMonth = (month, year) => {
  return moment(
    `${month}-${year}`,
    'MM-YYYY',
  ).startOf('month').weekday();
};

export const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekdayOfMonth(month, year);
  const result = [];

  const prev = getPrevMonthYear(month, year);
  const prevDaysInMonth = getDaysInMonth(
    prev.month,
    prev.year,
  );

  for (let j = firstWeekday - 1; j >= 0; j -= 1) {
    result.push({
      date: moment(
        `${prev.month}-${prevDaysInMonth - j}-${prev.year}`,
        'MM-DD-YYYY',
      ).toDate(),
      currentMonth: false,
    });
  }

  // Add current month's dates
  for (let i = 1; i <= daysInMonth; i += 1) {
    result.push({
      date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
      currentMonth: true,
    });
  }

  if (result.length < 42) {
    const daysToAdd = 42 - result.length;
    const next = getNextMonthYear(month, year);

    for (let i = 1; i <= daysToAdd; i += 1) {
      result.push({
        date: moment(
          `${month === 12 ? 1 : month + 1}-${i}-${next.year}`,
          'MM-DD-YYYY',
        ).toDate(),
        currentMonth: false,
      });
    }
  }
  return result;
};
