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
  selectDate, setSelectDate, setIsOpen, isOpen, modalDate, isPlansOpen, setIsPlansOpen, setCurrentPlans,
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

  const openPlans = (data) => {
    setCurrentPlans(data);
    setIsPlansOpen(!isPlansOpen);
  };

  const activeDay = (data) => {
    return getYesterdayFromToday() < data;
  };

  return (
    <div className="calendar-date">
      {
      datesInMonth.map((i, key) => {
        return (
          <div
            key={`${key + i.date + i.currentMonth}`}
            style={activeDay(i.date) ? { cursor: 'pointer' } : { cursor: 'default' }}
            onClick={() => (activeDay(i.date) ? changeDate(i.date.toString()) : false)}
            className={
              `calendar-date-indicator ${i.currentMonth ? 'active' : 'non-active'} 
              ${i.date.toString() === selectDate
                ? 'chosenDay'
                : 'others'} 
              ${activeDay(i.date)
                  ? 'calendar-active-day'
                  : 'calendar-non-active-day'} `
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
                modalDate.length ? modalDate.map((obj, idx) => {
                  return (
                    getMonthDayYear(obj.date).toString() === getMonthDayYear(i.date).toString()
                      ? (
                        <PlannCard
                          openPlans={openPlans}
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
