import React from 'react';
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
  AuthHeader
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp }) => {
  return (
    <>
      <AuthHeader>
        <LogoIcon />
      </AuthHeader>
      <SAuthForm>
        <AuthFormModal>
          <AuthFormModalBlock>
            <AuthFormModalTtl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </AuthFormModalTtl>
            <AuthFormLogin>
              {isSignUp && (
                <Input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value=""
                />
              )}
              <Input
                type="text"
                name="login"
                placeholder="Эл. почта"
                value=""
              />
              <Input
                type="password"
                name="password"
                placeholder="Пароль"
                value=""
              />
              <AuthButtonContainer>
                <Button>
                  {isSignUp ? "Зарегистрироваться" : "Войти"}
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