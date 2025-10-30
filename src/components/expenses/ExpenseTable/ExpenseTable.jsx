import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton
} from "./ExpenseTable.styled";
import {
  DeleteIcon
} from '../../common/icons/Icons';

const ExpenseTable = () => {
  const expenses = [
    { id: 1, description: 'Пятерочка', category: 'Еда', date: '2024-07-03', amount: 3500 },
    { id: 2, description: 'Яндекс Такси', category: 'Транспорт', date: '2024-07-03', amount: 730 },
    { id: 3, description: 'Аптека Вита', category: 'Другое', date: '2024-07-03', amount: 1200 },
    { id: 4, description: 'Бургер Кинг', category: 'Еда', date: '2024-07-03', amount: 950 },
    { id: 5, description: 'Деливери', category: 'Еда', date: '2024-07-02', amount: 1320 },
    { id: 6, description: 'Кофейня №1', category: 'Еда', date: '2024-07-02', amount: 400 },
    { id: 7, description: 'Бильярд', category: 'Развлечения', date: '2024-06-29', amount: 600 },
    { id: 8, description: 'Перекресток', category: 'Еда', date: '2024-06-29', amount: 2360 },
    { id: 9, description: 'Лукойл', category: 'Транспорт', date: '2024-06-29', amount: 1000 },
    { id: 10, description: 'Летуаль', category: 'Другое', date: '2024-06-29', amount: 4300 },
    { id: 11, description: 'Яндекс Такси', category: 'Транспорт', date: '2024-06-28', amount: 320 },
    { id: 12, description: 'Перекресток', category: 'Еда', date: '2024-06-28', amount: 1360 },
    { id: 13, description: 'Деливери', category: 'Еда', date: '2024-06-28', amount: 2320 },
    { id: 14, description: 'Вкусвилл', category: 'Еда', date: '2024-06-27', amount: 1220 },
    { id: 15, description: 'Кофейня №1', category: 'Еда', date: '2024-06-27', amount: 920 },
    { id: 16, description: 'Вкусвилл', category: 'Еда', date: '2024-06-26', amount: 840 },
    { id: 17, description: 'Кофейня №1', category: 'Еда', date: '2024-06-26', amount: 920 },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Описание</TableHeader>
          <TableHeader>Категория</TableHeader>
          <TableHeader>Дата</TableHeader>
          <TableHeader>Сумма</TableHeader>
          <TableHeader></TableHeader>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <TableRow key={expense.id}>
            <TableCell>
              {expense.description}
            </TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>
              {new Date(expense.date).toLocaleDateString('ru-RU')}
            </TableCell>
            <TableCell>{`${expense.amount.toLocaleString('ru-RU')} Р`}</TableCell>
            <TableCell>
              <ActionButton>
                <DeleteIcon />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;