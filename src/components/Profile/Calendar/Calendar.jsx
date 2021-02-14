import React, { useState } from 'react'
import { getToday } from '../../utils/date-moment'

import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarWeeks from './CalendarWeeks/CalendarsWeeks.jsx'
import CalendarDataInicatior from './CalendarDateIndicator/CalendarDateIndicator'
import CalendarMonthIndicator from './CalendarMonthIndicator/CalendarMonthIndicator';

import Modal from '../../Modal/Modal.jsx'
import ShowPlans  from '../../ShowPlans/ShowPlans'

const Calendar = () => {
  const [selectDate, setSelectDate] =
    useState(getToday());
  const [isOpen, setIsOpen] = useState(false)
  const [modalDate, setModalDate] = useState([{ title: 'test', description: 'test', date: selectDate }])

  const modalDateState = (obj) => {
    return setModalDate(prev => {
      return [...prev, obj]
    })
  }
  console.log(selectDate)

  return (
    <div className="bae-calendar-container">
      <CalendarHeader selectDate={selectDate} />
      <CalendarWeeks />
      <CalendarDataInicatior
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        modalDate={modalDate}
      />
      <CalendarMonthIndicator
        selectDate={selectDate}
        setSelectDate={setSelectDate}

      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setModalDate={modalDateState}
        selectDate={selectDate}
      />
      <ShowPlans
      
      />
      
    </div>
  );
};



export default Calendar