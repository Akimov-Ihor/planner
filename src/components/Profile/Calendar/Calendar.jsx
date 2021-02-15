import React, { useState } from 'react'
import { getToday } from '../../utils/date-moment'

import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarWeeks from './CalendarWeeks/CalendarsWeeks.jsx'
import CalendarDataInicatior from './CalendarDateIndicator/CalendarDateIndicator'
import CalendarMonthIndicator from './CalendarMonthIndicator/CalendarMonthIndicator';

import Modal from '../../Modal/Modal.jsx'
import ShowPlans from '../../ShowPlans/ShowPlans'
import { useSelector } from 'react-redux'

const Calendar = () => {
  const [selectDate, setSelectDate] = useState(getToday());
  const [isOpen, setIsOpen] = useState(false)
  const [isPlansOpen, setIsPlansOpen] = useState(false)
  const [currentPlans, setCurrentPlans] = useState(null)

 const modalDate = useSelector(state=>state.planns)

  return (
    <div className="calendar-container">
      <CalendarHeader selectDate={selectDate} />
      <CalendarWeeks />
      <CalendarDataInicatior
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        modalDate={modalDate}
        isPlansOpen={isPlansOpen}
        setIsPlansOpen={setIsPlansOpen}
        setCurrentPlans={setCurrentPlans}
      />
      <CalendarMonthIndicator
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectDate={selectDate}
      />
      <ShowPlans
        isPlansOpen={isPlansOpen}
        currentPlans={currentPlans}
        setIsPlansOpen={setIsPlansOpen}
      />

    </div>
  );
};



export default Calendar