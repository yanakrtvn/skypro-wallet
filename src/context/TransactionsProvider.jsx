import React, { useState, useEffect } from "react";
import { TransactionsContext } from "./TransactionsContext";
import { useAuth } from "../hooks/useAuth";
import { getTransactions, createTransaction, deleteTransaction, getTransactionsByPeriod } from "../api/transactions";

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const loadTransactions = async (filters = {}) => {
  if (!user?.token) {
    setError("Необходима авторизация");
    return;
  }

  try {
    setLoading(true);
    setError("");
    
    const data = await getTransactions(user.token, filters);
    
    const safeTransactions = Array.isArray(data) ? data.map(transaction => ({
      _id: transaction._id || `temp-${Date.now()}-${Math.random()}`,
      description: transaction.description || '',
      category: transaction.category || 'others',
      date: transaction.date || new Date().toISOString(),
      sum: transaction.sum || 0
    })) : [];
    
    setTransactions(safeTransactions);
  } catch (err) {
    setError(err.message);
    setTransactions([]);
  } finally {
    setLoading(false);
  }
};

  const loadTransactionsByPeriod = async (period) => {
    if (!user?.token) {
      setError("Необходима авторизация");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      const data = await getTransactionsByPeriod(user.token, period);
      setTransactions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (transactionData) => {
  if (!user?.token) {
    throw new Error("Необходима авторизация");
  }

  try {
    setError("");
    const newTransaction = await createTransaction(user.token, transactionData);
    
    setTransactions(prev => [newTransaction, ...prev]);
    
    return newTransaction;
  } catch (err) {
    setError(err.message);
    throw err;
  }
};

  const removeTransaction = async (id) => {
  if (!user?.token) {
    throw new Error("Необходима авторизация");
  }

  try {
    setError("");
    setTransactions(prev => prev.filter(transaction => transaction._id !== id));
    
    const data = await deleteTransaction(user.token, id);
    
    if (Array.isArray(data)) {
      setTransactions(data);
    }
    
    return data;
  } catch (err) {
    await loadTransactions();
    setError(err.message);
    throw err;
  }
};

  useEffect(() => {
    if (user?.token) {
      loadTransactions();
    } else {
      setTransactions([]);
    }
  }, [user?.token]);

  const value = {
    transactions,
    loading,
    error,
    loadTransactions,
    addTransaction,
    deleteTransaction: removeTransaction,
    loadTransactionsByPeriod,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};