/*
  Application Login Page
*/

import React from "react";
import { Link, useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Antd
import { Form, Button } from "antd";

// Components
import AuthenticationBase from "..";
import Text from "components/common/form-elements/text";
import Email from "components/common/form-elements/email";
import Password from "components/common/form-elements/password";

// Constants
import APP_URL from "constants/ApplicationUrls";


// Localization
import LOCALIZATION from "constants/Localization";

const MIN_LENGTH = 8;        // as per requirement, password must contain atleast 8 characters
function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Refs
  const [form] = Form.useForm();
  let formRef = React.createRef();

  // Redux States
  const loading = useSelector((state) => state?.Auth?.loading);

  const onSubmit = (data) => {
    
  };

  // password validator function
  const validatePassword = (rule, value) => {
    if (!value) {
      return Promise.resolve();
    }


    if (value.length < MIN_LENGTH) {
      return Promise.reject(LOCALIZATION.PASSWORD_MIN_LENGTH);
    }
    if (!/[a-zA-Z]/.test(value)) {
      return Promise.reject(LOCALIZATION.PASSWORD_MUST_CONTAIN_LETTER);
    }
    if (!/[0-9]/.test(value)) {
      return Promise.reject(LOCALIZATION.PASSWORD_MUST_CONTAIN_NUMBER);
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return Promise.reject(LOCALIZATION.PASSWORD_MUST_CONTAIN_SPECIAL_CHAR);
    }

    return Promise.resolve();
  };

  return (
    <AuthenticationBase loading={loading}>
      <h2 className="sub-head">{LOCALIZATION.SIGNUP}</h2>

      <Form form={form} ref={formRef} onFinish={onSubmit} layout="vertical">
        <div className="form-group">
          <Text
            className="form-control"
            name="name"
            required={true}
            placeholder={LOCALIZATION.NAME}
          />
        </div>

        <div className="form-group">
          <Email
            className="form-control"
            name="email"
            required={true}
            placeholder={LOCALIZATION.EMAIL_ADDRESS}
          />
        </div>

        <div className="form-group">
          <Password
            className="form-control"
            name="password"
            required={true}
            placeholder={LOCALIZATION.PASSWORD}
            validator={validatePassword}
          />
        </div>
        <Form.Item>
          <Button
            block
            size="medium"
            type="primary"
            htmlType="submit"
            className="mt-4 auth-action"
          >
            {LOCALIZATION.SIGNUP}
          </Button>
        </Form.Item>
      </Form>
    </AuthenticationBase>
  );
}

export default SignUp;
