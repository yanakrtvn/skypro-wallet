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
      setTransactions(data);
    } catch (err) {
      setError(err.message);
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
      const data = await createTransaction(user.token, transactionData);
      setTransactions(data);
      return data;
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
      const data = await deleteTransaction(user.token, id);
      setTransactions(data);
      return data;
    } catch (err) {
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