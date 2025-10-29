import React, { useState } from 'react';
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarTitle,
  ViewToggle,
  ToggleButton,
  WeekdaysHeader,
  Weekday,
  ScrollContainer
} from './Calendar.styled.js';
import MonthView from '../MonthView/MonthView.jsx';
import YearView from '../YearView/YearView.jsx';
import { WEEKDAYS_SHORT } from '../constants/calendarConstants.js';

const Calendar = () => {
  const [viewMode, setViewMode] = useState('month');

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <CalendarTitle>Период</CalendarTitle>
        <ViewToggle>
          <ToggleButton 
            $isActive={viewMode === 'month'} 
            onClick={() => setViewMode('month')}
          >
            Месяц
          </ToggleButton>
          <ToggleButton 
            $isActive={viewMode === 'year'} 
            onClick={() => setViewMode('year')}
          >
            Год
          </ToggleButton>
        </ViewToggle>
      </CalendarHeader>

      {viewMode === 'month' ? (
        <>
          <WeekdaysHeader>
            {WEEKDAYS_SHORT.map(day => (
              <Weekday key={day}>{day}</Weekday>
            ))}
          </WeekdaysHeader>
          
          <ScrollContainer>
            <MonthView 
              month={7} 
              year={2024} 
              title="Июль 2024" 
            />
            <MonthView 
              month={8} 
              year={2024} 
              title="Август 2024" 
            />
            <MonthView 
              month={9} 
              year={2024} 
              title="Сентябрь 2024" 
            />
          </ScrollContainer>
        </>
      ) : (
        <YearView 
          years={[2024, 2025]}
        />
      )}
    </CalendarWrapper>
  );
};

export default Calendar;