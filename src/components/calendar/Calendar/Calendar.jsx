import React, { useState } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';
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

const Calendar = ({ onPeriodChange }) => {
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
  const { loadTransactionsByPeriod } = useTransactions();

  const handleDateSelect = (date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
      onPeriodChange({ start: formatDateForAPI(date.date), end: null });
    } else {
      const start = selectedRange.start;
      const end = date;
      
      const sortedStart = start.date < end.date ? start : end;
      const sortedEnd = start.date < end.date ? end : start;
      
      setSelectedRange({ start: sortedStart, end: sortedEnd });
      
      const period = {
        start: formatDateForAPI(sortedStart.date),
        end: formatDateForAPI(sortedEnd.date)
      };
      
      onPeriodChange(period);
      
      loadTransactionsForPeriod(sortedStart, sortedEnd);
    }
  };

  const loadTransactionsForPeriod = async (start, end) => {
    try {
      const period = {
        start: formatDateForAPI(start.date),
        end: formatDateForAPI(end.date)
      };
      
      await loadTransactionsByPeriod(period);
    } catch (periodError) {
      console.error('Error loading period transactions:', periodError);
    }
  };

  const formatDateForAPI = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return '';
    }
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  const isDateInRange = (date) => {
    if (!selectedRange.start || !selectedRange.end) return false;
    
    const checkDate = new Date(date);
    const startDate = new Date(selectedRange.start.date);
    const endDate = new Date(selectedRange.end.date);
    
    return checkDate >= startDate && checkDate <= endDate;
  };

  const isDateSelected = (date) => {
    if (!selectedRange.start) return false;
    if (!selectedRange.end) {
      return date.toDateString() === selectedRange.start.date.toDateString();
    }
    return false;
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
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          isDateInRange={isDateInRange}
          isDateSelected={isDateSelected}
        />
        <MonthView 
          month={currentMonth + 1} 
          year={currentYear} 
          title={getMonthName(currentMonth + 1, currentYear)}
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          isDateInRange={isDateInRange}
          isDateSelected={isDateSelected}
        />
        <MonthView 
          month={currentMonth + 2} 
          year={currentYear} 
          title={getMonthName(currentMonth + 2, currentYear)}
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          isDateInRange={isDateInRange}
          isDateSelected={isDateSelected}
        />
      </ScrollContainer>
    </CalendarWrapper>
  );
};

export default Calendar;