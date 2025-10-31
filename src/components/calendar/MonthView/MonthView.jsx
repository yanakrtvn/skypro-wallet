import React from 'react';
import { MonthContainer, MonthTitle, DaysGrid, EmptyCell } from './MonthView.styled';
import { DayCell } from '../Calendar/Calendar.styled';

const MonthView = ({ month, year, title, selectedPeriod, onPeriodSelect }) => {

  const getMonthDays = (month, year) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); 
    
    const startOffset = startingDay === 0 ? 6 : startingDay - 1;
    
    return { daysInMonth, startOffset };
  };

  const isDaySelected = (day) => {
    return selectedPeriod === `${title}-${day}`;
  };

  const { daysInMonth, startOffset } = getMonthDays(month, year);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const emptyCells = Array.from({ length: startOffset }, (_, i) => i);

  const handleDayClick = (day) => {
    const period = `${title}-${day}`;
    onPeriodSelect(period);
  };

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
            onClick={() => handleDayClick(day)}
          >
            {day}
            {isDaySelected(day)}
          </DayCell>
        ))}
      </DaysGrid>
    </MonthContainer>
  );
};

export default MonthView;