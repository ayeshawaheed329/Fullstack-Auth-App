/*
  Application Signin Page Base Layout
*/

import React, { useEffect } from 'react';

// React Dom
import { Link } from "react-router-dom";

// Redux
import {
  useDispatch,
} from "react-redux";

// Antd
import { Col, Row } from "antd";

//Components
import Loading from "components/loading";

// Actions
// import { logout } from "store/actions/AuthAction";

// Constants
import APP_URL from 'constants/ApplicationUrls';

// Localization
import LOCALIZATION from "constants/Localization";


// Style & Icons
// import './style.scss';

function AuthenticationBase({
  loading,
  children,
  isSignInScreen
}) {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(logout())
  }, [dispatch]);

  return (
    <>
      {
        loading &&
        <Loading />
      }

      <Row className="authentication-wrapper">
        <Col xs={0} md={12} xl={16} className="image-col">
          <div className="content">
            {/* <h2>{ LOCALIZATION.LOGIN_PAGE_TAGLINE }</h2> */}
            <img
              src="https://as1.ftcdn.net/v2/jpg/07/12/13/32/1000_F_712133227_DHAVWre192vBLBfR3QnJrja7GmAZuZLD.jpg"
              alt="Sample"
              className="sample-image"
            />
          </div>
        </Col>
        <Col xs={24} md={12} xl={8} className="form-col">
          <img
            className="login-logo"
            src={<div>Logo</div>}
            alt="logo"
          />
          <div className='shadow-card'>
            {children}
          </div>
          {
            !!isSignInScreen &&
            <div className="back-link">
              {LOCALIZATION.BACK_TO_SIGNUP}
              <Link to={APP_URL.SIGNUP} >
                {" "+ LOCALIZATION.SIGNUP}
              </Link>
            </div>
          }
        </Col>
      </Row>

    </>
  );
}

export default AuthenticationBase;