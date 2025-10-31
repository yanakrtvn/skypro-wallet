import React, { useState } from 'react';
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarTitle,
  WeekdaysHeader,
  Weekday,
  ScrollContainer
} from './Calendar.styled.js';
import MonthView from '../MonthView/MonthView.jsx';
import { WEEKDAYS_SHORT } from '../constants/calendarConstants.js';

const Calendar = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const getMonthName = (monthNumber, year = currentYear) => {
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    
    let adjustedMonth = monthNumber;
    let adjustedYear = year;
    
    if (monthNumber > 12) {
      adjustedMonth = monthNumber - 12;
      adjustedYear = year + 1;
    } else if (monthNumber < 1) {
      adjustedMonth = monthNumber + 12;
      adjustedYear = year - 1;
    }
    
    return `${months[adjustedMonth - 1]} ${adjustedYear}`;
  };

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <CalendarTitle>Период</CalendarTitle>
      </CalendarHeader>

      <WeekdaysHeader>
        {WEEKDAYS_SHORT.map(day => (
          <Weekday key={day}>{day}</Weekday>
        ))}
      </WeekdaysHeader>
      
      <ScrollContainer>
        <MonthView 
          month={currentMonth} 
          year={currentYear} 
          title={getMonthName(currentMonth, currentYear)}
          selectedPeriod={selectedPeriod}
          onPeriodSelect={handlePeriodSelect}
        />
        <MonthView 
          month={currentMonth + 1} 
          year={currentYear} 
          title={getMonthName(currentMonth + 1, currentYear)}
          selectedPeriod={selectedPeriod}
          onPeriodSelect={handlePeriodSelect}
        />
        <MonthView 
          month={currentMonth + 2} 
          year={currentYear} 
          title={getMonthName(currentMonth + 2, currentYear)}
          selectedPeriod={selectedPeriod}
          onPeriodSelect={handlePeriodSelect}
        />
      </ScrollContainer>
    </CalendarWrapper>
  );
};

export default Calendar;