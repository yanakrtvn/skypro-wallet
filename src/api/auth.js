const API_BASE = "https://wedev-api.sky.pro/api";

export async function signUp({ name, login, password }) {
  try { 
    const response = await fetch(`${API_BASE}/user`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        login, 
        password
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(errorData.error || "Ошибка регистрации");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw new Error(error.message || "Ошибка регистрации");
  }
}

export async function signIn({ login, password }) {
  try {
    const response = await fetch(`${API_BASE}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        login,
        password
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login error response:", errorData);
      throw new Error(errorData.error || "Ошибка входа");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login API error:", error);
    throw new Error(error.message || "Ошибка входа");
  }
}