import React from 'react';

const CalenderMonth = ({ year, month, onPrevMonth, onNextMonth, monthNames }) => {
  return (
    <div className='months'>
      <button className='arrow1'  onClick={onPrevMonth}>&#60;</button>
      <h2>
        {monthNames[month - 1]} {year}
      </h2>
      <button className='arrow'  onClick={onNextMonth}>&#62;</button>
    </div>
  );
};

export default CalenderMonth;