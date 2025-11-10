const API_BASE = "https://wedev-api.sky.pro/api";

export async function signUp({ name, login, password }) {
  try {
    console.log("Sending signup request to:", `${API_BASE}/user`);
    console.log("Signup data:", { name, login, password });

    const response = await fetch(`${API_BASE}/user`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        login, 
        password
      })
    });

    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      throw new Error(errorData.error || "Ошибка регистрации");
    }

    const data = await response.json();
    console.log("Signup response:", data);
    return data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw new Error(error.message || "Ошибка регистрации");
  }
}

export async function signIn({ login, password }) {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      body: JSON.stringify({
        login,
        password
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Ошибка входа");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Ошибка входа");
  }
}