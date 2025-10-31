import React from 'react';
import { Link } from 'react-router-dom';
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
        <LogoutButton>Выйти</LogoutButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;