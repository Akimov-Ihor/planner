import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlannCard } from '../../../PlannCard/PlannCard.jsx';

import {
  getDayOfMonth,
  getMonth,
  getYear,
  getMonthDayYear,
  getYesterdayFromToday,
} from '../../../../utils/dateMoment-utils';
import { getDatesInMonthDisplay } from '../../../../utils/date-utils';

import { getAllPlans } from '../../../../store/actions/planner.actions';

import './CalendarDateIndicator.css';

export const CalendarDateIndicator = ({
  selectDate, setSelectDate, setIsOpen, isOpen, modalDate, isPlanOpen, setIsPlanOpen, setCurrentPlan,
}) => {
  const userId = useSelector((state) => state.userData.id);
  const dispatch = useDispatch();

  useEffect(async () => {
    await getAllPlans(userId)(dispatch);
  }, []);

  const openCloseModal = (date) => {
    setSelectDate(date);
    setIsOpen(!isOpen);
  };

  const changeDate = (date) => {
    setSelectDate(date);
    openCloseModal(date);
  };

  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate),
  );

  const openPlan = (data) => {
    setCurrentPlan(data);
    setIsPlanOpen(!isPlanOpen);
  };

  const isChosen = (i) => (i.date.toString() === selectDate ? 'chosenDay' : 'others');
  const isActiveDay = (data) => (getYesterdayFromToday() < data ? 'calendar-active-day' : 'calendar-non-active-day');
  const isCurrentMonth = (currentMonth) => (currentMonth ? 'active' : 'non-active');
  const activeDay = (data) => getYesterdayFromToday() < data;

  const compareDate = (plan, day) => getMonthDayYear(plan.date).toString() === getMonthDayYear(day.date).toString();
  const activeDayCursor = (data) => (getYesterdayFromToday() < data ? 'pointer' : 'default');

  const changeActiveDate = (date) => (activeDay(date) ? changeDate(date.toString()) : false);

  return (
    <div className="calendar-date">
      {
      datesInMonth.map((i, key) => {
        return (
          <div
            key={`${key + i.date + i.currentMonth}`}
            style={{ cursor: activeDayCursor(i.date) }}
            onClick={() => changeActiveDate(i.date)}
            className={
              `calendar-date-indicator 
              ${isCurrentMonth} 
              ${isChosen(i)} 
              ${isActiveDay(i.date)} `
            }
          >
            <div
              className="calendar-date-indicator-current"
              data-active-month={i.currentMonth}
              data-date={i.date}
              key={key}
            >
              {getDayOfMonth(i.date)}
            </div>
            <div
              className="calendar-date-indicator-plans"
              key={`${key + i.date} `}
            >
              {
                modalDate.length
                  ? modalDate.map((obj, idx) => {
                    return (
                      compareDate(obj, i)
                        ? (
                          <PlannCard
                            openPlans={openPlan}
                            obj={obj}
                            key={idx}
                            title={obj.title}
                            description={obj.description}
                          />
                        ) : null
                    );
                  }) : null
              }
            </div>
          </div>
        );
      })
    }
    </div>
  );
};
