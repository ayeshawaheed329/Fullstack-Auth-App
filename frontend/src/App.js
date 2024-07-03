/*
  Actual application starts from this file
*/

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

// Antd
import { notification } from "antd";

// Constants
import APP_URL from "constants/ApplicationUrls";
import { NOTIFICATION_DURATION } from "constants/Common";

// Components
import PrivateRoute from "components/private-route";
import Loading from "components/loading";

// Auth Components
import SignIn from "components/Authentication/signin";
import SignUp from "components/Authentication/signup";

// Localization
import LOCALIZATION from "constants/Localization";

// Styling
import "./assets/sass/style.scss";

//  It will be showed if user is unable to signup or login
notification.config({
  placement: "topRight",
  duration: NOTIFICATION_DURATION,
  rtl: false,
});

// Base Layout
const BaseLayout = Loadable({
  loader: () => import("components/baseLayout"),
  loading: Loading,
});

function App() {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <Switch>
          {/* Signup */}
          <Route
            path={APP_URL.SIGNUP}
            name={LOCALIZATION.SIGNUP}
            component={SignUp}
          />

          {/* Signin */}
          <Route
            path={APP_URL.SIGNIN}
            name={LOCALIZATION.SIGNIN}
            component={SignIn}
          />

          {/* Restricted Routes Here : Once user is loggin redirect to app home page*/}
          <PrivateRoute component={BaseLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
