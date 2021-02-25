import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getToday } from '../../../utils/dateMoment-utils';

import { CalendarHeader } from './CalendarHeader/CalendarHeader.jsx';
import { CalendarWeeks } from './CalendarWeeks/CalendarsWeeks.jsx';
import { CalendarDateIndicator } from './CalendarDateIndicator/CalendarDateIndicator.jsx';
import { CalendarMonthIndicator } from './CalendarMonthIndicator/CalendarMonthIndicator.jsx';

import { Modal } from '../../Modal/Modal.jsx';
import { ShowPlan } from '../../ShowPlans/ShowPlan.jsx';

export const Calendar = () => {
  const history = useHistory();
  const [selectDate, setSelectDate] = useState(getToday());
  const [isOpen, setIsOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

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
        isPlanOpen={isPlanOpen}
        setIsPlanOpen={setIsPlanOpen}
        setCurrentPlan={setCurrentPlan}
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
      <ShowPlan
        isPlanOpen={isPlanOpen}
        modalDate={modalDate}
        currentPlan={currentPlan}
        setIsPlanOpen={setIsPlanOpen}
        userId={userId}
      />
    </div>
  );
};
