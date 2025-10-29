import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  width: 789px;
  height: 540px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 2px solid red;
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
  color: #666;
  font-size: 14px;
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