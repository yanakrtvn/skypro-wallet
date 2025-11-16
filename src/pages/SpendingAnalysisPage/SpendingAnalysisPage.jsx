import React, { useState } from 'react';
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
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <>
      <Header currentPath="/spending-analysis" />
      <ContentWrapper>
        <SpendingAnalysisWrapper>
          <PageTitle>Анализ расходов</PageTitle>
          <AnalysisContainer>
            <Calendar onPeriodChange={handlePeriodChange} />
            <Analytics period={selectedPeriod} />
          </AnalysisContainer>
        </SpendingAnalysisWrapper>
      </ContentWrapper>
    </>
  );
};

export default SpendingAnalysisPage;