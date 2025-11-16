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

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  line-height: 150%;
  margin-bottom: 20px;
  padding-top: 36px;
  text-align: left;

  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 20px;
  }
`;

export const TableAndFormWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TableSection = styled.div`
  flex: 2;
  background: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 789px;

  @media (max-width: 1200px) {
    min-width: auto;
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;

  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const TableTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

  @media (max-width: 1200px) {
    position: static;
    min-width: auto;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

export const TableControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;