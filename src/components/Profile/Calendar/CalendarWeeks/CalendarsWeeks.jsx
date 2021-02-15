import React from 'react'
import './CalendarWeeks.css'
import { useSelector } from 'react-redux'


const CalendarWeeks = () => {
  const weekdays = useSelector(state=>state.weekdays)

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