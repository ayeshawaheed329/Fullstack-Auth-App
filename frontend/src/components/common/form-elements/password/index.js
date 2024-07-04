/*
  Input Password
*/

import React from "react";

// Antd
import { Input, Form } from "antd";

// Localization
import LOCALIZATION from "constants/Localization";

function Password({
  name,
  label,
  placeholder,
  required,
  validator,
  maxLength
}) {
  // Rules
  let rules = [
    { required: required, message: LOCALIZATION.REQUIRED },
    { whitespace: true, message: LOCALIZATION.NO_SPACES_ALLOWED },
    { validator: validator}
  ];

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
    >
      <Input.Password
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </Form.Item>
  );
}

export default Password;
