import React from 'react'
import './CalendarWeeks.css'
import {weekdays} from '../../../utils/data'


const CalendarWeeks = () => {


  return (
    <div className="calendar-weekday-indicators">
      {
        weekdays.map((day, key) => {
          return (
            <div className="weekday-indicator-day" key={key}>
              {day}
            </div>
          );
        })
      }

    </div>
  )
}
export default CalendarWeeks