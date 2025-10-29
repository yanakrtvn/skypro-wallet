import styled from "styled-components";

export const SButton = styled.button`
  width: 100%;
  height: 39px;
  padding: 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: rgb(31, 164, 108);
  color: rgb(255, 255, 255);
  font-family: inherit;

  &:hover {
    background-color: rgb(21, 134, 88);
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  }
`;