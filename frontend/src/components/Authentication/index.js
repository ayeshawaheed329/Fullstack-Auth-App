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

// Components
import Loading from "components/loading";

// Images
import eLogo from "assets/images/logo.png";

// Constants
import APP_URL from 'constants/ApplicationUrls';

// Localization
import LOCALIZATION from "constants/Localization";

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
            {/* <img
              src="https://images.unsplash.com/photo-1604933834215-2a64950311bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUlMjBsZWFybmluZyUyMGxvZ298ZW58MHx8MHx8fDA%3D"
              alt="Sample"
             className="btn"
            /> */}
          </div>
        </Col>
        <Col xs={24} md={12} xl={8} className="form-col">
          <img
            className="signin-logo"
            src={eLogo}
            alt="logo"
          />
          <div className='shadow-card'>
            {children}
          </div>
          {
            !!isSignInScreen ?
            <div className="back-link">
              {LOCALIZATION.BACK_TO_SIGNUP}
              <Link to={APP_URL.SIGNUP} >
                {LOCALIZATION.SIGNUP}
              </Link>
            </div>
            :
            <div className="back-link">
              {LOCALIZATION.BACK_TO_SIGIN}
              <Link to={APP_URL.SIGNIN} >
                {LOCALIZATION.SIGNIN}
              </Link>
            </div>
          }
        </Col>
      </Row>

    </>
  );
}

export default AuthenticationBase;