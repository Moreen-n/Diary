// YearComponent.js
import React from 'react';

const CalenderYear = ({ year, onPrevYear, onNextYear }) => {
  return (
    <div className='year'>
      <button className='arrow1' onClick={onPrevYear} aria-label='Previous Year'>&#60;</button>
      <h2>{year}</h2>
      <button className='arrow'  onClick={onNextYear} aria-label='Next Year'>&#62;</button>
    </div>
  );
};

export default CalenderYear;
