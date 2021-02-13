import React, { useState } from 'react';
import moment from 'moment'
import CalendarHeader from './CalendarHeader'
import CalendarWeeks from '../CalendarWeeks/CalendarsWeeks.jsx'

const BaeCalendar = () => {
  const [selectDate, setSelectDate] =
    useState(moment().toDate());

  return (
    <div className="bae-calendar-container">
      <CalendarHeader selectDate={selectDate} />
      <CalendarWeeks />
      {/* <CalendarDateIndicator
        selectDate={selectDate}
        setSelectDate={setSelectDate} /> */}
    </div>
  );
};

export default BaeCalendar;