import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: #f5f5f5;
  min-height: calc(100vh - 64px);
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  line-height: 150%;
  margin-bottom: 20px;
  padding-top: 36px;
`;

export const TableAndFormWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-start;
`;

export const TableSection = styled.div`
  flex: 2;
  background: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 789px;
`;

export const TableTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 10px;
`;

export const FormSection = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  position: sticky;
  top: 20px;
`;

export const TableControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;