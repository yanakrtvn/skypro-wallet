import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavButton,
  LogoutButton
} from "./Header.styled";

const Header = ({ currentPath }) => {
  return (
    <HeaderWrapper>
      <Logo>
        <span>Логотип</span>
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
    </HeaderWrapper>
  );
};

export default Header;