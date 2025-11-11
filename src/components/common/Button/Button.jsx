import React from 'react';
import { SButton } from "./Button.styled";

const Button = ({ children, $disabled = false, ...props }) => {
  return <SButton $disabled={$disabled} {...props}>{children}</SButton>;
};

export default Button;