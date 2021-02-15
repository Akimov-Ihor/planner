import React  from 'react'
import {
  getDayOfMonth,
  getMonth,
  getYear,
} from '../../../utils/date-moment';


import { getDatesInMonthDisplay } from '../../../utils/date-utils';
import './CalendarDateIndicator.css'


const CalendarDateIndicator = ({ selectDate, setSelectDate, setIsOpen, isOpen, modalDate, isPlansOpen, setIsPlansOpen, setCurrentPlans }) => {

  const changeDate = (e) => {

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
  const openPlans = (data) => {
    console.log(data)
    setCurrentPlans(data)
    setIsPlansOpen(!isPlansOpen)
  }

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
              className='calendar-date-indicator-plans'
              key={`${key + i.date} `}

            >
              <ul >
                {
                  modalDate.length
                    ? modalDate.map((obj, idx) => {
                      return (
                        obj.date.toString() === i.date.toString()
                          ? <li
                            onClick={() => openPlans(obj)}
                            key={idx}>{obj.title}
                          </li>
                          : ''
                      )

                    })
                    : ''
                }
              </ul>
            </div>
          </div>
        )
      })
    }
  </div>
  );
};

export default CalendarDateIndicator