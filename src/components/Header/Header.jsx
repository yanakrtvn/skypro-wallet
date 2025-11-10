import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LogoIcon } from '../common/icons/Icons';
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Nav,
  NavButton,
  LogoutButton
} from "./Header.styled";

const Header = ({ currentPath }) => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <LogoIcon />
        </Logo>
        <Nav>
          <NavButton 
            as={Link} 
            to="/"
            $active={currentPath === '/'}
          >
            Мои расходы
          </NavButton>
          <NavButton 
            as={Link} 
            to="/spending-analysis"
            $active={currentPath === '/spending-analysis'}
          >
            Анализ расходов
          </NavButton>
        </Nav>
        <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;