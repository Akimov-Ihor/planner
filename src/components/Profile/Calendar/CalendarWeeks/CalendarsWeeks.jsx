import React from 'react'


const CalendarWeeks = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bae-weekday-indicators">
      {
        weekdays.map((day, key) => {
          return (
            <div className="weekday-indicator-icon" key={key}>
              {day}
            </div>
          );
        })
      }

    </div>
  )
}
export default CalendarWeeks