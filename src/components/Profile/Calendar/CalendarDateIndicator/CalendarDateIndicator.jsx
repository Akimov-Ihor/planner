import React from 'react';
import {
  getDayOfMonth,
  getMonth,
  getToday,
  getYear,
} from '../../../../utils/date-moment';

import { getDatesInMonthDisplay } from '../../../../utils/date-utils';
import { PlannCard } from '../../../PlannCard/PlannCard.jsx';
import './CalendarDateIndicator.css';

export const CalendarDateIndicator = ({
  selectDate, setSelectDate, setIsOpen, isOpen, modalDate, isPlansOpen, setIsPlansOpen, setCurrentPlans,
}) => {
  const openCloseModal = (date) => {
    setSelectDate(date);
    setIsOpen(!isOpen);
  };

  const changeDate = (e) => {
    setSelectDate(e.target.getAttribute('data-date'));
    openCloseModal(e.target.getAttribute('data-date'));
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
              data-date={i.date.toString()}
              key={key}
              onClick={activeDay(i.date) ? changeDate : null}
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
                        obj.date.toString() === i.date.toString()
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
