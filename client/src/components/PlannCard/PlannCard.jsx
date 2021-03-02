import React from 'react';
import './PlannCard.css';

export const PlannCard = ({
  title, openPlans, obj,
}) => {
  return (

    <div
      className="plann-card-wrapper"
      onClick={(event) => {
        event.stopPropagation();
        openPlans(obj);
      }}
    >
      {title}
    </div>

  );
};
