import React from 'react';
import { MonthContainer, MonthTitle, DaysGrid, EmptyCell } from './MonthView.styled';
import { DayCell } from '../Calendar/Calendar.styled';

const MonthView = ({ 
  month, 
  year, 
  title, 
  onDateSelect, 
  isDateInRange, 
  isDateSelected
}) => {

  const getMonthDays = (month, year) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); 
    
    const startOffset = startingDay === 0 ? 6 : startingDay - 1;
    
    return { daysInMonth, startOffset };
  };

  const handleDayClick = (day) => {
    const date = new Date(year, month - 1, day);
    onDateSelect({ date, day, month, year });
  };

  const isDayInRange = (day) => {
    const date = new Date(year, month - 1, day);
    return isDateInRange(date);
  };

  const isDaySelected = (day) => {
    const date = new Date(year, month - 1, day);
    return isDateSelected(date);
  };

  const { daysInMonth, startOffset } = getMonthDays(month, year);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startOffset }, (_, i) => i);

  return (
    <MonthContainer>
      <MonthTitle>{title}</MonthTitle>
      <DaysGrid>
        {emptyCells.map((_, index) => (
          <EmptyCell key={`empty-${index}`} />
        ))}
        
        {days.map(day => (
          <DayCell 
            key={day} 
            $isCurrentMonth
            $isSelected={isDaySelected(day)}
            $isInRange={isDayInRange(day)}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </DayCell>
        ))}
      </DaysGrid>
    </MonthContainer>
  );
};

export default MonthView;