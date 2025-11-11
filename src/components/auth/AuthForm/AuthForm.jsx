import React, { useState, useEffect } from "react";
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
  const [fieldValidity, setFieldValidity] = useState({
    name: false,
    login: false,
    password: false
  });
  const { login, register, loading, error, clearError } = useAuth();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    clearError();
    setErrors({});
    setFieldValidity({
      name: false,
      login: false,
      password: false
    });
  }, [isSignUp, clearError]);

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    const newFieldValidity = { ...fieldValidity };
    
    switch (name) {
      case "name": {
        if (isSignUp && value.length < 2) {
          newErrors.name = "Имя должно содержать минимум 2 символа";
          newFieldValidity.name = false;
        } else if (isSignUp && value.length >= 2) {
          delete newErrors.name;
          newFieldValidity.name = true;
        } else {
          delete newErrors.name;
          newFieldValidity.name = true;
        }
        break;
      }
      case "login": {
        if (!emailRegex.test(value)) {
          newErrors.login = "Введите корректный email";
          newFieldValidity.login = false;
        } else {
          delete newErrors.login;
          newFieldValidity.login = true;
        }
        break;
      }
      case "password": {
        if (value.length < 6) {
          newErrors.password = "Пароль должен содержать минимум 6 символов";
          newFieldValidity.password = false;
        } else {
          delete newErrors.password;
          newFieldValidity.password = true;
        }
        break;
      }
      default:
        break;
    }
    
    setErrors(newErrors);
    setFieldValidity(newFieldValidity);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (value.length > 0) {
      validateField(field, value);
    } else {
      const newFieldValidity = { ...fieldValidity };
      newFieldValidity[field] = false;
      setFieldValidity(newFieldValidity);
      
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
    
    if (error) {
      clearError();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const newFieldValidity = {
      name: false,
      login: false,
      password: false
    };
    
    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = "Имя обязательно";
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Имя должно содержать минимум 2 символа";
      } else {
        newFieldValidity.name = true;
      }
    } else {
      newFieldValidity.name = true;
    }
    
    if (!formData.login.trim()) {
      newErrors.login = "Email обязателен";
    } else {
      if (!emailRegex.test(formData.login)) {
        newErrors.login = "Введите корректный email";
      } else {
        newFieldValidity.login = true;
      }
    }
    
    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    } else {
      newFieldValidity.password = true;
    }
    
    setErrors(newErrors);
    setFieldValidity(newFieldValidity);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    if (isSignUp) {
      return fieldValidity.name && fieldValidity.login && fieldValidity.password;
    } else {
      return fieldValidity.login && fieldValidity.password;
    }
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

      if (!success) {
        return;
      }
    } catch {
      // Ошибка обрабатывается в AuthProvider
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
                    $valid={fieldValidity.name && !errors.name}
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
                  $valid={fieldValidity.login && !errors.login}
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
                  $valid={fieldValidity.password && !errors.password}
                />
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </div>
              
              <AuthButtonContainer>
                <Button 
                  type="submit" 
                  disabled={!isFormValid() || loading}
                  $disabled={!isFormValid() || loading}
                >
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