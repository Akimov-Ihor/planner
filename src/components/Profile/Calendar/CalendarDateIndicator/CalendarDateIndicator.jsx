import React,{useState} from 'react'
import {
  getDayOfMonth,
  getToday,
  getMonth,
  getYear,
  getTodaySecFormat
} from '../../../utils/date-moment';


import { getDatesInMonthDisplay } from '../../../utils/date-utils';
import './CalendarDateIndicator.css'


const CalendarDateIndicator = ({ selectDate, setSelectDate, setIsOpen, isOpen, modalDate, }) => {

  const changeDate = (e) => {
    console.log(e.target)
    setSelectDate(e.target.getAttribute('data-date'))
    openCloseModal(e.target.getAttribute('data-date'))
  };

  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );

  const openCloseModal = (date) => {
    setSelectDate(date)
    setIsOpen(!isOpen)
  }
  const [isPlansOpen , setIsPlansOpen] = useState (false)

  return (<div className="calendar-date">
    {
      datesInMonth.map((i, key) => {
        return (
          <div
            key={`${key + i.date + i.currentMonth}`}
            className={
              `calendar-date-indicator ${i.currentMonth ? 'active' : 'non-active'} 
              ${i.date.toString() === selectDate ? 'сhoosenDay' : 'others'} `
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
            <div
              className='calendar-date-indicator-plans' key={`${key + i.date} `}
              onClick={() => openCloseModal(i.date)}
            >
              <ul >
                {
                  modalDate.length && modalDate.map((obj, idx) => {
                    return (
                      obj.date.toString() == i.date.toString() ? <li key={idx}>{obj.title}</li> : null
                    )

                  })


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