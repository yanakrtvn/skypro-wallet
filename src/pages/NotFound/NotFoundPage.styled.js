import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

export const HomeLink = styled(Link)`
  color: #1FA46C;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;