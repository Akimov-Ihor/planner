import React from 'react';

import { constants } from '../../../../constants/text.constants';

import './CalendarWeeks.css';

export const CalendarWeeks = () => {
  return (
    <div className="calendar-weekday-indicators">
      {
        constants.weekdays.map((day, key) => {
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
