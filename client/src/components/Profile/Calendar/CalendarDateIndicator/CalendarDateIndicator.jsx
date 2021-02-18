import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDayOfMonth,
  getMonth,
  getToday,
  getYear,
  getMonthDayYear,
} from '../../../../utils/date-moment';

import { getDatesInMonthDisplay } from '../../../../utils/date-utils';
import { PlannCard } from '../../../PlannCard/PlannCard.jsx';
import './CalendarDateIndicator.css';
import { getAllPlans } from '../../../../store/actionCreators/plannerCreators';

export const CalendarDateIndicator = ({
  selectDate, setSelectDate, setIsOpen, isOpen, modalDate, isPlansOpen, setIsPlansOpen, setCurrentPlans,
}) => {
  const userId = useSelector((state) => state.user.id);
  console.log(userId);
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
    return getToday() < data;
  };
  return (
    <div className="calendar-date">
      {
      datesInMonth.map((i, key) => {
        return (
          <div
            key={`${key + i.date + i.currentMonth}`}
            style={activeDay(i.date) ? { cursor: 'pointer' } : { cursor: 'default' }}
            className={
              `calendar-date-indicator ${i.currentMonth ? 'active' : 'non-active'} 
              ${i.date.toString() === selectDate
                ? 'сhoosenDay'
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
              onClick={activeDay(i.date) ? () => changeDate(i.date.toString()) : null}
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
                        getMonthDayYear(obj.date).toString() === getMonthDayYear(i.date).toString()
                          ? (
                            <PlannCard
                              openPlans={openPlans}
                              obj={obj}
                              key={idx}
                              title={obj.title}
                              description={obj.description}
                            />
                          )
                          : ''
                      );
                    })
                    : ''
                }
            </div>
          </div>
        );
      })
    }
    </div>
  );
};
