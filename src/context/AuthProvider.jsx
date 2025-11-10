import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { signUp, signIn } from "../api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Загружаем пользователя из localStorage при монтировании
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (token && userData) {
      setUser({ 
        token, 
        ...JSON.parse(userData) 
      });
    }
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    
    if (userData) {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError("");
      
      const data = await signIn(credentials);
      const userData = {
        token: data.token,
        ...data.user
      };
      
      updateUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
  try {
    setLoading(true);
    setError("");
    
    const data = await signUp(userData);
    
    const newUser = {
      token: data.token,
      ...data.user
    };
    
    updateUser(newUser);
    return true;
  } catch (err) {
    setError(err.message);
    return false;
  } finally {
    setLoading(false);
  }
};

  const logout = () => {
    updateUser(null);
    return true;
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};