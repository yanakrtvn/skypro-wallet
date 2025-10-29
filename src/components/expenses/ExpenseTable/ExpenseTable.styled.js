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
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #ffffff;
  }
  &:hover {
    background: #e6f3e6;
  }
  transition: background 0.3s ease;
`;

export const TableCell = styled.td`
  padding: 12px;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #1FA46C;
  }
`;