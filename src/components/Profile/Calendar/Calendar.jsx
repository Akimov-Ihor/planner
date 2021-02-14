import React,{ useState } from 'react'
import {getToday} from '../../utils/date-moment'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarWeeks from './CalendarWeeks/CalendarsWeeks.jsx'
import CalendarDataInicatior from './CalendarDateIndicator/CalendarDateIndicator'
import CalendarMonthIndicator from './CalendarMonthIndicator/CalendarMonthIndicator';

const Calendar = () => {
  const [selectDate, setSelectDate] =
    useState(getToday());

  return (
    <div className="bae-calendar-container">
      <CalendarHeader selectDate={selectDate} />
      <CalendarWeeks />
      <CalendarDataInicatior
        selectDate={selectDate}
        setSelectDate={setSelectDate} />
      <CalendarMonthIndicator
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
    </div>
  );
};



export default Calendar