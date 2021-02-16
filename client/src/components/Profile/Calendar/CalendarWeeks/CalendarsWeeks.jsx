import React from 'react';
import { useSelector } from 'react-redux';

import './CalendarWeeks.css';

export const CalendarWeeks = () => {
  const weekdays = useSelector((state) => state.weekdays);
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
  );
};
