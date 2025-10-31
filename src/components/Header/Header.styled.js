import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 64px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const NavButton = styled.a`
  text-decoration: ${props => props.$active ? 'underline' : 'none'};
  color: ${props => props.$active ? 'rgba(115, 52, 234, 1)' : '#333'};
  font-family: 'Montserrat', sans-serif;
  font-weight: ${props => props.$active ? '600' : '400'};
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: rgba(115, 52, 234, 1);
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: rgba(115, 52, 234, 1);
  }
`;