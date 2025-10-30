import React from 'react';
import Header from '../../components/Header/Header';
import ExpenseTable from '../../components/expenses/ExpenseTable/ExpenseTable';
import ExpenseForm from '../../components/expenses/ExpenseForm/ExpenseForm';
import {
  Container,
  ContentWrapper,
  MainContent,
  MainTitle,
  TableAndFormWrapper,
  TableSection,
  TableTitle,
  FormSection,
  TableControlsWrapper
} from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <Header currentPath="/" />
      <Container>
        <ContentWrapper>
          <MainContent>
            <MainTitle>Мои расходы</MainTitle>
            <TableAndFormWrapper>
              <TableSection>
                <TableControlsWrapper>
                  <TableTitle>Таблица расходов</TableTitle>
                  {/* <FilterControls /> */}
                </TableControlsWrapper>
                <ExpenseTable />
              </TableSection>
              <FormSection>
                <ExpenseForm />
              </FormSection>
            </TableAndFormWrapper>
          </MainContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default MainPage;