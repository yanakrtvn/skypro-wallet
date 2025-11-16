import React from 'react';
import { SInput } from "./Input.styled";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  $hasError = false,
  $valid = false,
  ...props
}) => {
  return (
    <SInput
      type={type}
      placeholder={placeholder}
      value={value}
      $hasError={$hasError}
      $valid={$valid}
      {...props}
    />
  );
};

export default Input;