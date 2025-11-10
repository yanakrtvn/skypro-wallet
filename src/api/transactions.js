const API_BASE = "https://wedev-api.sky.pro/api";

export async function getTransactions(token, filters = {}) {
  try {
    const url = new URL(`${API_BASE}/transactions`);
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        url.searchParams.append(key, filters[key]);
      }
    });

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Ошибка загрузки транзакций");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Ошибка загрузки транзакций");
  }
}

export async function getTransactionsByPeriod(token, period) {
  try {
    const response = await fetch(`${API_BASE}/transactions/period`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(period)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Ошибка загрузки транзакций за период");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Ошибка загрузки транзакций за период");
  }
}

export async function createTransaction(token, transactionData) {
  try {
    const response = await fetch(`${API_BASE}/transactions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transactionData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Ошибка создания транзакции");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Ошибка создания транзакции");
  }
}

export async function deleteTransaction(token, id) {
  try {
    const response = await fetch(`${API_BASE}/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Ошибка удаления транзакции");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Ошибка удаления транзакции");
  }
}