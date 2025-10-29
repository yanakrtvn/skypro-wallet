import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton
} from "./ExpenseTable.styled";

const ExpenseTable = () => {
  const expenses = [
    { id: 1, description: 'Пятерочка', category: 'Еда', date: '2024-07-03', amount: 3500 },
    { id: 2, description: 'Яндекс Такси', category: 'Транспорт', date: '2024-07-03', amount: 730 },
    { id: 3, description: 'Аптека Вита', category: 'Другое', date: '2024-07-03', amount: 1200 },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Описание</TableHeader>
          <TableHeader>Категория</TableHeader>
          <TableHeader>Дата</TableHeader>
          <TableHeader>Сумма</TableHeader>
          <TableHeader>Действия</TableHeader>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <TableRow key={expense.id}>
            <TableCell>{expense.description}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>
              {new Date(expense.date).toLocaleDateString('ru-RU')}
            </TableCell>
            <TableCell>{`${expense.amount.toLocaleString('ru-RU')} Р`}</TableCell>
            <TableCell>
              <ActionButton>✏️</ActionButton>
              <ActionButton>🗑️</ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;