import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Input from "../../Input/Input";
import Button from "../../common/Button/Button";
import { LogoIcon } from "../../common/icons/Icons";
import {
  AuthButtonContainer,
  AuthFormGroup,
  AuthFormLogin,
  AuthFormModal,
  AuthFormModalBlock,
  AuthFormModalTtl,
  SAuthForm,
  AuthHeader,
  ErrorMessage
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const { login, register, loading, error } = useAuth();

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case "name":
        if (isSignUp && value.length < 2) {
          newErrors.name = "Имя должно содержать минимум 2 символа";
        } else {
          delete newErrors.name;
        }
        break;
      case "login":
        if (!value.includes("@")) {
          newErrors.login = "Введите корректный email";
        } else {
          delete newErrors.login;
        }
        break;
      case "password":
        if (value.length < 6) {
          newErrors.password = "Пароль должен содержать минимум 6 символов";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    validateField(field, value);
  };

  const validateForm = () => {
  const newErrors = {};
  
  if (isSignUp && !formData.name.trim()) {
    newErrors.name = "Имя обязательно";
  } else if (isSignUp && formData.name.trim().length < 2) {
    newErrors.name = "Имя должно содержать минимум 2 символа";
  }
  
  if (!formData.login.trim()) {
    newErrors.login = "Email обязателен";
  } else if (!formData.login.includes("@")) {
    newErrors.login = "Введите корректный email";
  }
  
  if (!formData.password) {
    newErrors.password = "Пароль обязателен";
  } else if (formData.password.length < 6) {
    newErrors.password = "Пароль должен содержать минимум 6 символов";
  }
  
  console.log("Validation errors:", newErrors);
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

    try {
    const success = isSignUp 
      ? await register({
          name: formData.name,
          login: formData.login,
          password: formData.password
        })
      : await login({
          login: formData.login,
          password: formData.password
        });

    if (success) {
      console.log("Auth successful!");
    } else {
      console.log("Auth failed");
    }
  } catch (err) {
    console.error("Auth error:", err); // Добавьте эту строку
  }
};

  return (
    <>
      <AuthHeader>
        <LogoIcon />
      </AuthHeader>
      <SAuthForm onSubmit={handleSubmit}>
        <AuthFormModal>
          <AuthFormModalBlock>
            <AuthFormModalTtl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </AuthFormModalTtl>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <AuthFormLogin>
              {isSignUp && (
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    $hasError={!!errors.name}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </div>
              )}
              
              <div>
                <Input
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={(e) => handleInputChange("login", e.target.value)}
                  $hasError={!!errors.login}
                />
                {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
              </div>
              
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  $hasError={!!errors.password}
                />
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </div>
              
              <AuthButtonContainer>
                <Button type="submit" disabled={loading}>
                  {loading ? "Загрузка..." : (isSignUp ? "Зарегистрироваться" : "Войти")}
                </Button>
              </AuthButtonContainer>
            </AuthFormLogin>
            
            {!isSignUp && (
              <AuthFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <a href="/sign-up">Регистрируйтесь здесь</a>
              </AuthFormGroup>
            )}
            
            {isSignUp && (
              <AuthFormGroup>
                <p>Уже есть аккаунт?</p>
                <a href="/sign-in">Войдите здесь</a>
              </AuthFormGroup>
            )}
          </AuthFormModalBlock>
        </AuthFormModal>
      </SAuthForm>
    </>
  );
};

export default AuthForm;