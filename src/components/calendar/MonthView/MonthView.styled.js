import styled from 'styled-components';

export const MonthContainer = styled.div`
  margin-bottom: 20px;
`;

export const MonthTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  padding: 0 10px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 0 10px;
`;