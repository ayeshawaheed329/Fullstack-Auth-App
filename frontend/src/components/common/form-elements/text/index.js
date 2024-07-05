/*
  Input Text
*/

import React from "react";

// Antd
import { Input, Form } from "antd";

// Localization
import LOCALIZATION from "constants/Localization";

function Text({
  name,
  label,
  placeholder,
  required,
  maxLength
}) {
  // Rules
  let rules = [{ required: required, message: LOCALIZATION.NAME_REQUIRED }];

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
    >
      <Input
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="off"
      />
    </Form.Item>
  );
}

export default Text;
