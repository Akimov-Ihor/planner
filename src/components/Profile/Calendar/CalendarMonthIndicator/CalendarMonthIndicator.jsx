import React from 'react';
import { getMonth, getSpecificDate, getYear } from '../../../utils/date-moment'
import { monthsFull } from '../../../utils/data';
import './CalendarMonthIndicatior.css'

const CalendarMonthIndicator = ({ selectDate, setSelectDate }) => {

  const changeMonth = (e) => setSelectDate(e.target.getAttribute('data-date'));

  const getMonthSet = (selectDate) => {
    const month = getMonth(selectDate) + 1;
    const result = {
      current: selectDate,
      prev: getSpecificDate(month - 1, 1, getYear(selectDate)),
      next: getSpecificDate(month + 1, 1, getYear(selectDate)),
    };

    if (month === 1) {
      result.prev = getSpecificDate(12, 1, getYear(selectDate) - 1);
    }

    if (month === 12) {
      result.next = getSpecificDate(1, 1, getYear(selectDate) + 1);
    }

    return result;
  };
  const monthSet = getMonthSet(selectDate);


  return (
    <div className="callendar-month-indicator">
      <h4 data-date={monthSet.prev} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.prev)]}
      </h4>
      <h3>{monthsFull[getMonth(monthSet.current)]}</h3>
      <h4 data-date={monthSet.next} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.next)]}
      </h4>
    </div>
  )
}

export default CalendarMonthIndicator