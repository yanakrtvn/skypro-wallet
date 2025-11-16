import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const SpendingAnalysisWrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  max-width: 1200px;
`;

export const PageTitle = styled.h2`
  padding-top: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  
  @media (max-width: 1200px) {
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 20px;
  }
`;

export const AnalysisContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;