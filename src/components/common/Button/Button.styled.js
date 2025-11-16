import styled from "styled-components";
export const SButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 12px;
  color: #fff;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(115, 52, 234, 1);

  ${({ $disabled }) =>
    $disabled &&
    `
      background: rgba(153, 153, 153, 1);
      cursor: not-allowed;
      
      &:hover {
        background: rgba(153, 153, 153, 1);
      }
    `}

  &:hover {
    background: ${({ $disabled }) => 
      $disabled ? 'rgba(153, 153, 153, 1)' : 'rgba(95, 32, 214, 1)'};
  }
`;