import React from 'react';
import Header from '../../components/Header/Header';
import Analytics from '../../components/analytics/Analytics/Analytics';
import Calendar from '../../components/calendar/Calendar/Calendar';
import {
  ContentWrapper,
  SpendingAnalysisWrapper,
  PageTitle,
  AnalysisContainer
} from './SpendingAnalysisPage.styled';

const SpendingAnalysisPage = () => {
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