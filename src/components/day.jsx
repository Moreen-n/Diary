import './day.css';

import { useState } from 'react';

const CalendarDate = ({ setSelectedDay, selectedDay, daysInMonth, currentDay, onDayClick, month, year }) => {
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSaveMessage = () => {
    const eventKey = `${selectedDay}-${month}-${year}`;
    setEvents([
      ...events.filter((e) => !e.hasOwnProperty(eventKey)),
      { [eventKey]: message },
    ]);
    setMessage('');
  };

  const hasMessage = (day) => {
    return events.some((e) => e.hasOwnProperty(`${day}-${month}-${year}`));
  };

  const getMessageForDay = (day) => {
    const messageObj = events.find((e) => e.hasOwnProperty(`${day}-${month}-${year}`));
    return messageObj ? messageObj[`${day}-${month}-${year}`] : '';
  };

  return (
    <div id='days-container'>
      {[...Array(daysInMonth)].map((_, index) => (
        <div
          className={`days ${index + 1 === currentDay ? 'current-day' : ''} ${
            index + 1 === selectedDay ? 'selected-day' : ''
          } ${hasMessage(index + 1) ? 'has-message' : ''}`}
          key={index + 1}
          onClick={() => {
            onDayClick(index + 1);
            setMessage(getMessageForDay(index + 1));
          }}
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
          Submit message
        </button>
      </div>
    </div>
  );
};

export default CalendarDate;
