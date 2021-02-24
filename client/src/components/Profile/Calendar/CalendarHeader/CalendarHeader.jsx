import React from 'react';
import {
  getReadableMonthDate,
  getReadableWeekday,
  getYear,
} from '../../../../utils/dateMoment-utils';
import './CalendarHeader.css';

export const CalendarHeader = ({ selectDate }) => {
  return (
    <div className="header-calendar-container">
      <div className="header-calendar-title">
        <h1>{getReadableWeekday(selectDate)}</h1>
        <h1>
          {getReadableMonthDate(selectDate)}
          {getYear(selectDate)}
        </h1>
      </div>
    </div>
  );
};
