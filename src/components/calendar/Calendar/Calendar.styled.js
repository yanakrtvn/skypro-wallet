import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  height: 540px;
  border-radius: 20px;
  background: white;
  font-family: sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

export const CalendarHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const WeekdaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  gap: 8px; /* Уменьшаем расстояние между днями недели */
`;

export const Weekday = styled.div`
  width: 17px;
  height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(153, 153, 153, 1);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin: 0 auto;
`;

export const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 20px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 2px;
  }
`;

export const DayCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 60px;
  background: ${({ $isSelected, $isCurrentMonth }) => 
    $isSelected ? 'rgba(241, 235, 253, 1)' : 
    $isCurrentMonth ? 'rgba(244, 245, 246, 1)' : '#f5f5f5'};
  color: ${({ $isSelected }) => 
    $isSelected ? 'rgba(103, 58, 183, 1)' : 'inherit'};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ $isSelected }) => $isSelected ? '600' : '400'};
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: ${({ $isSelected }) => 
      $isSelected ? 'rgba(241, 235, 253, 1)' : 'rgba(224, 224, 224, 1)'};
  }
`;

export const PeriodButton = styled.button`
  padding: 8px 16px;
  background: rgba(103, 58, 183, 1);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(83, 38, 163, 1);
  }
  
  &:active {
    background: rgba(63, 18, 143, 1);
  }
`;