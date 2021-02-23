import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getToday } from '../../../utils/date-moment';

import { CalendarHeader } from './CalendarHeader/CalendarHeader.jsx';
import { CalendarWeeks } from './CalendarWeeks/CalendarsWeeks.jsx';
import { CalendarDateIndicator } from './CalendarDateIndicator/CalendarDateIndicator.jsx';
import { CalendarMonthIndicator } from './CalendarMonthIndicator/CalendarMonthIndicator.jsx';

import { Modal } from '../../Modal/Modal.jsx';
import { ShowPlans } from '../../ShowPlans/ShowPlans.jsx';

export const Calendar = () => {
  const history = useHistory();
  const [selectDate, setSelectDate] = useState(getToday());
  const [isOpen, setIsOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [currentPlans, setCurrentPlans] = useState(null);

  const modalDate = useSelector((state) => state.plansList);
  const userId = useSelector((state) => state.userData.id);

  const [userDataFromStore,
    isVerifyingAuthFromStore,
  ] = useSelector(({ userData, isVerifyingAuth }) => [userData, isVerifyingAuth]);
  if (!userDataFromStore && !isVerifyingAuthFromStore) {
    history.push('/login');
  }
  return (
    <div className="calendar-container">
      <CalendarHeader selectDate={selectDate} />
      <CalendarWeeks />
      <CalendarDateIndicator
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
        userId={userId}
      />
      <ShowPlans
        isPlansOpen={isPlansOpen}
        modalDate={modalDate}
        currentPlans={currentPlans}
        setIsPlansOpen={setIsPlansOpen}
        userId={userId}
      />
    </div>
  );
};
