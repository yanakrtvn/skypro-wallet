import React from 'react';
import {
  YearContainer,
  YearGrid,
  MonthCard,
  MonthName,
  SelectedIcon
} from './YearView.styled';

const YearView = ({ years, selectedPeriod, onPeriodSelect }) => {
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const isMonthSelected = (year, monthIndex) => {
    return selectedPeriod === `${months[monthIndex]} ${year}`;
  };

  const handleMonthClick = (year, monthIndex) => {
    const period = `${months[monthIndex]} ${year}`;
    onPeriodSelect(period);
  };

  return (
    <YearContainer>
      {years.map(year => (
        <div key={year}>
          <h3 style={{ margin: '15px 0', padding: '0 10px' }}>{year}</h3>
          <YearGrid>
            {months.map((month, index) => (
              <MonthCard 
                key={index}
                $isSelected={isMonthSelected(year, index)}
                onClick={() => handleMonthClick(year, index)}
              >
                <MonthName>{month}</MonthName>
                {isMonthSelected(year, index) && <SelectedIcon>✓</SelectedIcon>}
              </MonthCard>
            ))}
          </YearGrid>
        </div>
      ))}
    </YearContainer>
  );
};

export default YearView;