import React from 'react';
import { SButton } from "./Button.styled";

const Button = ({ children, ...props }) => {
  return <SButton {...props}>{children}</SButton>;
};

export default Button;