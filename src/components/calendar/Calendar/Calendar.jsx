import React, { useState } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarTitle,
  WeekdaysHeader,
  Weekday,
  ScrollContainer,
  PeriodButton
} from './Calendar.styled.js';
import MonthView from '../MonthView/MonthView.jsx';
import { WEEKDAYS_SHORT } from '../constants/calendarConstants.js';

const Calendar = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const { loadTransactionsByPeriod } = useTransactions();

  const handlePeriodSelect = async (periodString) => {
    try {
      const [monthYear, day] = periodString.split('-');
      const [monthName, year] = monthYear.split(' ');
      
      const monthIndex = getMonthIndex(monthName);
      const startDate = new Date(parseInt(year), monthIndex, parseInt(day));
      const endDate = new Date(parseInt(year), monthIndex, parseInt(day));
      
      const period = {
        start: formatDateForAPI(startDate),
        end: formatDateForAPI(endDate)
      };
      
      setSelectedPeriod(periodString);
      
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

  const getMonthIndex = (monthName) => {
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return months.findIndex(month => month === monthName);
  };

  const handleTodayClick = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    const period = {
      start: formatDateForAPI(startOfMonth),
      end: formatDateForAPI(endOfMonth)
    };
    
    setSelectedPeriod(`Этот месяц`);
    loadTransactionsByPeriod(period);
  };

  const handleLastMonthClick = () => {
    const today = new Date();
    const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    
    const period = {
      start: formatDateForAPI(startOfLastMonth),
      end: formatDateForAPI(endOfLastMonth)
    };
    
    setSelectedPeriod(`Прошлый месяц`);
    loadTransactionsByPeriod(period);
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
        <div style={{ display: 'flex', gap: '10px' }}>
          <PeriodButton onClick={handleTodayClick}>
            Этот месяц
          </PeriodButton>
          <PeriodButton onClick={handleLastMonthClick}>
            Прошлый месяц
          </PeriodButton>
        </div>
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