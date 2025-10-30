import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  width: 789px;
  height: 540px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #e0e0e0; /* Убираем красную рамку */
`;

export const AnalyticsHeader = styled.div`
  margin-bottom: 16px;
`;

export const AnalyticsAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const AnalyticsPeriod = styled.div`
  font-size: 14px;
  color: ${({ $hasPeriod }) => $hasPeriod ? 'rgba(217, 182, 255, 1)' : '#666'};
  font-weight: ${({ $hasPeriod }) => $hasPeriod ? '600' : '400'};
`;

export const ChartContainer = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background-color: white;
  padding: 12px;
`;