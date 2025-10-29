import styled from "styled-components";

export const SInput = styled.input`
  width: 100%;
  min-width: 100%;
  height: 39px;
  position: relative;
  padding: 12px;
  outline: none;
  box-sizing: border-box;
  border: 0.5px solid rgb(153, 153, 153);
  border-radius: 6px;
  color: inherit;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  background-color: transparent;

  &::placeholder {
    color: rgb(153, 153, 153);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
`;