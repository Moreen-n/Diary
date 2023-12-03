// DayComponent.js
import React from 'react';

const CalenderDate = ({ daysInMonth }) => {
  return (
    <div id='days-container'>
     
      {[...Array(daysInMonth)].map((_, index) => (
        <div className='days' key={index + 1}>{index + 1}</div>
      ))}
    </div>
  );
};

export default CalenderDate;
