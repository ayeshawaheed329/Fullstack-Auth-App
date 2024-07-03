/* 
  Main Layout for application
*/

import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Antd
import { Layout } from "antd";

// Constants
import APP_URL from "constants/ApplicationUrls";
import ROUTES from "constants/Routes";

// Components
import Loading from "components/loading";

const { Content } = Layout;

function BaseLayout({}) {
  return (
    <Content className={"layout-full"}>
      <div className="main-section">
        <Suspense fallback={<Loading />}>
          {/* Utilise route */}
          <Switch>
            {ROUTES?.map((route, index) => {
              let { path, exact, name, component: Component } = route;

              return (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  name={name}
                  render={(compProps) => <Component {...compProps} />}
                />
              );
            })}

            {/* Default case when application goes to root then what should happens? */}
            <Redirect from="/" to={APP_URL.HOME} />
          </Switch>
        </Suspense>
      </div>
    </Content>
  );
}

export default BaseLayout;
