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
    if (!dateString) return 'Не указана';
    
    try {
      return new Date(dateString).toLocaleDateString('ru-RU');
    } catch {
      return dateString;
    }
  };

  const getSafeSum = (transaction) => {
    const sum = transaction?.sum;
    if (sum === undefined || sum === null) return 0;
    return typeof sum === 'number' ? sum : parseFloat(sum) || 0;
  };

  const getSafeDescription = (transaction) => {
    return transaction?.description || 'Без описания';
  };

  const getSafeCategory = (transaction) => {
    return transaction?.category || 'others';
  };

  const getSafeId = (transaction, index) => {
    return transaction?._id || `temp-${index}`;
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
        {safeTransactions.map((transaction, index) => {
          const safeId = getSafeId(transaction, index);
          const safeSum = getSafeSum(transaction);
          const safeDescription = getSafeDescription(transaction);
          const safeCategory = getSafeCategory(transaction);
          
          return (
            <TableRow key={safeId}>
              <TableCell>
                {safeDescription}
              </TableCell>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {getCategoryIcon(safeCategory)}
                  {getCategoryName(safeCategory)}
                </div>
              </TableCell>
              <TableCell>
                {formatDate(transaction.date)}
              </TableCell>
              <TableCell>{`${safeSum.toLocaleString('ru-RU')} Р`}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleDelete(safeId)}>
                  <DeleteIcon />
                </ActionButton>
              </TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;