import React from 'react';
import { useTransactions } from '../../../hooks/useTransactions';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton,
  LoadingMessage,
  ErrorMessage
} from "./ExpenseTable.styled";
import {
  DeleteIcon
} from '../../common/icons/Icons';
import { getCategoryName, getCategoryIcon } from '../../../utils/categoryUtils';


const ExpenseTable = () => {
  const { transactions, loading, error, deleteTransaction } = useTransactions();

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту транзакцию?')) {
      try {
        await deleteTransaction(id);
      } catch (deleteError) {
        console.error('Ошибка при удалении:', deleteError);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  if (loading) {
    return <LoadingMessage>Загрузка транзакций...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Ошибка: {error}</ErrorMessage>;
  }

  if (safeTransactions.length === 0) {
    return <LoadingMessage>Нет транзакций</LoadingMessage>;
  }

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
        {safeTransactions.map(transaction => (
          <TableRow key={transaction._id}>
            <TableCell>
              {transaction.description}
            </TableCell>
            <TableCell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {getCategoryIcon(transaction.category)}
                {getCategoryName(transaction.category)}
              </div>
            </TableCell>
            <TableCell>
              {formatDate(transaction.date)}
            </TableCell>
            <TableCell>{`${transaction.sum.toLocaleString('ru-RU')} Р`}</TableCell>
            <TableCell>
              <ActionButton onClick={() => handleDelete(transaction._id)}>
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