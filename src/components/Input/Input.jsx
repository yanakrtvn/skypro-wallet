import React from 'react';
import { SInput } from "./Input.styled";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  ...props
}) => {
  return (
    <SInput
      type={type}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
};

export default Input;