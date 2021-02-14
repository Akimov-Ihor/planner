import React from 'react'
import {
  getDayOfMonth,
  getToday,
  getMonth,
  getYear,
  getTodaySecFormat
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
  console.log(selectDate)

  
  return (<div className="calendar-date">
    {
      datesInMonth.map((i, key) => {
        return (
          <div
            key={`${key + i.date + i.currentMonth}`}
            className={
              `calendar-date-indicator ${i.currentMonth ? 'active' : 'non-active'} 
              ${i.date.toString() === selectDate.toString() ? 'сhoosenDay' : 'others'} `
            }
          >
            <div
              className='calendar-date-indicator-current'
              data-active-month={i.currentMonth}
              data-date={i.date.toString()}
              key={key}
              onClick={changeDate}
            >
              {getDayOfMonth(i.date)}
            </div>
            <div className='calendar-date-indicator-plans' key={`${key + i.date} `}>
              <ul >
                {
                  i.date.toString() === selectDate.toString()  ? 'today' : 'other'

                }

              </ul>

            </div>
          </div>
        )
      }
      )
    }
  </div>
  );
};

export default CalendarDateIndicator