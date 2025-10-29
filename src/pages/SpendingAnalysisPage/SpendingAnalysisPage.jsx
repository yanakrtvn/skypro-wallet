import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Analytics from '../../components/analytics/Analytics/Analytics';
import Calendar from '../../components/calendar/Calendar/Calendar';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const SpendingAnalysisWrapper = styled.div`
  padding: 10px 20px;
`;

const PageTitle = styled.h2`
  padding-top: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
`;

const AnalysisContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SpendingAnalysisPage = () => {
  console.log('SpendingAnalysisPage rendered'); // Отладочное сообщение
  return (
    <>
      <Header currentPath="/spending-analysis" />
      <ContentWrapper>
        <SpendingAnalysisWrapper>
          <PageTitle>Анализ расходов</PageTitle>
          <AnalysisContainer>
            <Calendar />
            <Analytics period="июль 2024" />
          </AnalysisContainer>
        </SpendingAnalysisWrapper>
      </ContentWrapper>
    </>
  );
};

export default SpendingAnalysisPage;