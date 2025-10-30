import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  Message,
  HomeLink
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Страница не найдена</Message>
      <HomeLink to="/">Вернуться на главную</HomeLink>
    </Container>
  );
};

export default NotFoundPage;