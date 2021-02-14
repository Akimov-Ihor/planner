import React from 'react'
import {
  getDayOfMonth,
  getToday,
  getMonth,
  getYear,
} from '../../../utils/date-moment';
import moment from 'moment'
import { getDatesInMonthDisplay } from '../../../utils/date-utils';
import './CalendarDateIndicator.css'


const CalendarDateIndicator = ({ activeDates, selectDate, setSelectDate }) => {

  const changeDate = (e) => {
    console.log(e.target)
    setSelectDate(e.target.getAttribute('data-date'))
  };

  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );
 console.log(getToday() - selectDate , selectDate)

  return (<div className="calendar-date">
    {
      datesInMonth.map((i, key) => {
        return (
          <div
            className={
              `calendar-date-indicator  ${i.currentMonth ? 'active' : 'non-active'} ${getToday() == selectDate ? 'today' : 'others'} `}
            data-active-month={i.currentMonth}
            data-date={i.date.toString()}
            key={key}
            onClick={changeDate}
          >
          
              {getDayOfMonth(i.date)}
            

          </div>
        )
      }
      )
    }
  </div>
  );
};

export default CalendarDateIndicator