import './day.css';

import { useState } from 'react';

const CalendarDate = ({ setSelectedDay, selectedDay, daysInMonth, currentDay, onDayClick, month, year }) => {
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState([]);
// 
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
// saving a message for a selected day
  const handleSaveMessage = () => {
    setEvents([
      ...events,
      { [`${selectedDay}-${month}-${year}`]: message },
    ]);
    setMessage('');
  };
// here am checking for the day that has an event
  const hasMessage = (day) => {
    const messageObj = events.find((e) => e.hasOwnProperty(`${day}-${month}-${year}`));
    // Obj is message object
    return messageObj ? true : false;
  };

  return (
    <div id='days-container'>
      {[...Array(daysInMonth)].map((_, index) => (
        <div
          className={`days ${index + 1 === currentDay ? 'current-day' : ''} ${
            index + 1 === selectedDay ? 'selected-day' : ''
          } ${hasMessage(index + 1) ? 'has-message' : ''}`}
          key={index + 1}
          onClick={() => onDayClick(index + 1)}
        >
          {hasMessage(index + 1) ? <span>💌</span> : null}
          {index + 1}
        </div>
      ))}

      <div className={`message-input ${hasMessage(selectedDay) ? 'highlighted-textArea' : ''}`}>
        <textarea
          placeholder="Dear diary..."
          value={message}
          onChange={handleInputChange}
        />
        <button id='sub' onClick={() => { onDayClick(selectedDay); handleSaveMessage(); }}>
          Submit Memory
        </button>
      </div>
    </div>
  );
};

export default CalendarDate;
