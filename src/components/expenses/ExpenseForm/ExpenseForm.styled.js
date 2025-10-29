import styled from 'styled-components';

export const FormTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  margin: 15px 0 20px 20px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

export const FieldLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 20px 0 20px 20px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

export const FormInput = styled.input`
  display: block;
  width: 280px;
  height: 39px;
  padding: 12px;
  margin: 0 0 15px 20px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`;

export const DateInput = styled.input`
  display: block;
  width: 280px;
  height: 39px;
  padding: 12px;
  margin: 0 0 15px 20px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`;

export const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  margin: 5px;
  border: none;
  border-radius: 30px;
  background: #F4F5F6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }

  ${({ $selected }) =>
    $selected &&
    `
      background: #DBFFE9;
      color: #1FA46C;
    `}
`;

export const FormButton = styled.button`
  width: 280px;
  height: 39px;
  border-radius: 6px;
  padding: 12px;
  background: #1FA46C;
  color: #fff;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  margin: 15px 0 0 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #16905A;
  }
`;