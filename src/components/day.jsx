import './day.css';

import React, { useState } from 'react';

const CalenderDate = ({ setSelectedDay, selectedDay, daysInMonth, currentDay, onDayClick, month, year }) => {
  
  const [message, setMessage] = useState('');
const [events, setEvents]= useState([])

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSaveMessage = () => {
  
    
   
    setMessage('');
    setSelectedDay(null);
    setEvents([...events,{[`${selectedDay}-${month}-${year}`]:message}])
    
  };
  const messageObj = events.find(e => `${selectedDay}-${month}-${year}` in e );
  const messageToShow = messageObj?.[`${selectedDay}-${month}-${year}`]
  console.log(messageObj, "msg obj")



  // const handleShowMessage = () => {
  //   // const message = events.find(e => Object.keys(e)===`${selectedDay}-${month}-${year}`);
  //   if(messageToShow){
  //     setShowMessage(true)
  //   }else{
  //     setShowMessage(false)
  //   }
    
  // }

  return (
    <div id='days-container'>
      {[...Array(daysInMonth)].map((_, index) => (
        <div
          className={`days ${index + 1 === currentDay ? 'current-day' : ''} ${index + 1 === selectedDay ? 'selected-day' : ''}`}
          key={index + 1}
          onClick={() => onDayClick(index + 1)}
        > 
        {index + 1 === selectedDay && messageToShow ? <span>🗨️</span>: null}
          {index + 1}
        </div>
      ))}

      
        <div className={`message-input ${messageToShow ? 'highlighted-textArea':'' }`}>
          <textarea
            placeholder="Dear diary..."
            value={messageToShow || message}
            onChange={handleInputChange}
          />
          <button id='sub' onClick={handleSaveMessage}>Submit message</button>
        </div>
     

     
    </div>
  );
};

export default CalenderDate;
