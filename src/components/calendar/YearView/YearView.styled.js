import styled from 'styled-components';

export const YearContainer = styled.div`
  padding: 0 20px;
  height: 100%;
  overflow-y: auto;
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
  background: ${({ $isSelected }) => 
    $isSelected ? 'rgba(217, 182, 255, 0.2)' : 'white'};
  border-color: ${({ $isSelected }) => 
    $isSelected ? 'rgba(217, 182, 255, 1)' : '#eee'};
  color: ${({ $isSelected }) => 
    $isSelected ? 'rgba(217, 182, 255, 1)' : 'inherit'};
  font-weight: ${({ $isSelected }) => $isSelected ? '600' : '400'};
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ $isSelected }) => 
      $isSelected ? 'rgba(217, 182, 255, 0.3)' : '#f5f5f5'};
  }
`;

export const MonthName = styled.div`
  font-size: 14px;
`;
