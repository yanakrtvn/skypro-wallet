import styled from "styled-components";

export const SInput = styled.input`
  width: 313px;
  height: 39px;
  position: relative;
  padding: 12px;
  outline: none;
  box-sizing: border-box;
  border: 0.5px solid;
  border-radius: 6px;
  color: inherit;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  background-color: transparent;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  border-color: rgba(153, 153, 153, 1);
  background: white;

  ${({ $hasError }) =>
    $hasError &&
    `
      background: rgba(255, 245, 245, 1);
      border-color: rgba(255, 77, 79, 1);
    `}

  ${({ $valid }) =>
    $valid &&
    `
      background: rgba(241, 235, 253, 1);
      border-color: rgba(115, 52, 234, 1);
    `}

  &:focus {
    outline: none;
    ${({ $hasError, $valid }) => {
      if ($hasError) {
        return `
          background: rgba(255, 245, 245, 1);
          border-color: rgba(255, 77, 79, 1);
        `;
      } else if ($valid) {
        return `
          background: rgba(241, 235, 253, 1);
          border-color: rgba(115, 52, 234, 1);
        `;
      } else {
        return `
          border-color: rgba(115, 52, 234, 1);
        `;
      }
    }}
  }

  &::placeholder {
    color: rgb(153, 153, 153);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
`;