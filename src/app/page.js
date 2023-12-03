"use client";

import { useState } from "react";

import CalenderDate from "@/components/day";
import CalenderMonth from "@/components/month";
import CalenderYear from "@/components/year";

const Diary = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Months are zero-based
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const daysInMonth = new Date(year, month, 0).getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handlePrevMonth = () => {
    setMonth(month === 1 ? 12 : month - 1);
  };

  const handleNextMonth = () => {
    setMonth(month === 12 ? 1 : month + 1);
  };
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div id="main">
      <h1 className="diary">Diary</h1>
      <CalenderMonth
        onPrevMonth={handlePrevMonth}
        // year={year}
        month={month}
        onNextMonth={handleNextMonth}
        monthNames={monthNames}
      />

      <CalenderYear
        onPrevYear={handlePrevYear}
        year={year}
        onNextYear={handleNextYear}
      />

      <CalenderDate
        month={month}
        year={year}
        setSelectedDay={setSelectedDay}
        daysInMonth={daysInMonth}
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />
    </div>
  );
};

export default Diary;
