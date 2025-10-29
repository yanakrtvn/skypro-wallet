import React from 'react';
import styled from 'styled-components';
import { DayCell } from '../Calendar/Calendar.styled';

const MonthContainer = styled.div`
  margin-bottom: 20px;
`;

const MonthTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  padding: 0 10px;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 0 10px;
`;

const MonthView = ({ title }) => {
  //  реализация для демонстрации
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <MonthContainer>
      <MonthTitle>{title}</MonthTitle>
      <DaysGrid>
        {days.map(day => (
          <DayCell key={day} $isCurrentMonth>
            {day}
          </DayCell>
        ))}
      </DaysGrid>
    </MonthContainer>
  );
};

export default MonthView;