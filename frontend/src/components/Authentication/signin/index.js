/*
  Application Signin Page
*/

import React from "react";
import { Link, useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Antd
import { Form, Button } from "antd";

// Components
import AuthenticationBase from "..";
import Email from "components/common/form-elements/email";
import Password from "components/common/form-elements/password";

// Constants
import APP_URL from "constants/ApplicationUrls";


// Localization
import LOCALIZATION from "constants/Localization";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Refs
  const [form] = Form.useForm();
  let formRef = React.createRef();

  // Redux States
  const loading = useSelector((state) => state?.Auth?.loading);

  const onSubmit = (data) => {
  };

  return (
    <AuthenticationBase loading={loading} isSignInScreen={true}>
      <h2 className="sub-head">{LOCALIZATION.SIGNIN}</h2>

      <Form form={form} ref={formRef} onFinish={onSubmit} layout="vertical">
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
            {LOCALIZATION.SIGNIN}
          </Button>
        </Form.Item>
      </Form>
    </AuthenticationBase>
  );
}

export default SignIn;
