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
  border: 0.5px solid;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
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
    color: rgba(153, 153, 153, 0.8);
  }
`;

export const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 20px 15px 20px;
  max-width: 280px;
`;

export const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  border: 0.5px solid;
  border-radius: 30px;
  background: #F4F5F6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 0 0 auto;

  border-color: rgba(153, 153, 153, 1);

  &:hover {
    background: rgba(241, 235, 253, 0.5);
  }

  ${({ $selected }) =>
    $selected &&
    `
      background: rgba(241, 235, 253, 1);
      color: rgba(115, 52, 234, 1);
      border-color: rgba(115, 52, 234, 1);
      
      svg path {
        fill: rgba(115, 52, 234, 1);
      }
    `}

  ${({ $valid }) =>
    $valid &&
    `
      border-color: rgba(115, 52, 234, 1);
    `}
`;

export const FormButton = styled.button`
  width: 280px;
  height: 39px;
  border-radius: 6px;
  padding: 12px;
  color: #fff;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  margin: 15px 0 0 20px;
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

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin: -10px 0 15px 20px;
  font-family: 'Montserrat', sans-serif;
  min-height: 16px;
`;

export const SuccessMessage = styled.div`
  color: #2e7d32;
  background-color: #edf7ed;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #2e7d32;
  font-size: 14px;
`;