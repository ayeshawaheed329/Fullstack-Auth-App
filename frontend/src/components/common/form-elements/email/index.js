/*
  Input Email
*/

import React from "react";

// Antd
import { Input, Form } from "antd";

// Localization
import LOCALIZATION from "constants/Localization";

function Email({ name, label, placeholder, required, maxLength }) {
  // Rules
  let rules = [
    { required: required, message: LOCALIZATION.EMAIL_REQUIRED },
    { type: "email", message: LOCALIZATION.INVALID_EMAIL },
  ];

  return (
    <Form.Item name={name} label={label} rules={rules} data-testid="form">
      <Input placeholder={placeholder} maxLength={maxLength}/>
    </Form.Item>
  );
}

export default Email;
