import styled from 'styled-components';

export const YearContainer = styled.div`
  padding: 0 20px;
`;

export const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const MonthCard = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const MonthName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;