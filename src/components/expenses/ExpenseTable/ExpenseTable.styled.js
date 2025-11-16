import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  border-bottom: 2px solid #ddd;
  font-weight: 400;
  font-size: 12px;
  vertical-align: middle;
  font-family: 'Montserrat', sans-serif;
  color: #999999;
  
  &:last-child {
    text-align: right;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #ffffff;
  }
  &:hover {
    background: rgba(241, 235, 253, 1);
  }
  transition: background 0.3s ease;
`;

export const TableCell = styled.td`
  padding: 4px;
  font-size: 12px;
  border-bottom: none;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  
  &:last-child {
    text-align: right;
  }
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  transition: color 0.3s ease;

  /* &:hover {
    color: #1FA46C;
  } */
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
  font-family: 'Montserrat', sans-serif;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #ff4d4f;
  font-family: 'Montserrat', sans-serif;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 8px;
  margin: 20px 0;
`;