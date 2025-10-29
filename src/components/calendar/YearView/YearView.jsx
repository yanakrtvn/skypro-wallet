import React from 'react';
import styled from 'styled-components';

const YearContainer = styled.div`
  padding: 0 20px;
`;

const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const MonthCard = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const MonthName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const YearView = ({ years }) => {
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  return (
    <YearContainer>
      {years.map(year => (
        <div key={year}>
          <h3 style={{ margin: '15px 0' }}>{year}</h3>
          <YearGrid>
            {months.map((month, index) => (
              <MonthCard key={index}>
                <MonthName>{month}</MonthName>
              </MonthCard>
            ))}
          </YearGrid>
        </div>
      ))}
    </YearContainer>
  );
};

export default YearView;