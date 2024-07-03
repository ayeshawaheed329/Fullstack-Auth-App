/*
  Boot component for application.
*/

import React from "react";

// Redux
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

// Antd
import { ConfigProvider } from "antd";

// Configuration
import configureStore from "store/configureStore";

// Storage
import StorageService from "services/StorageService";

// Components
import App from "App";

// Stores & History
const store = configureStore();
const history = createBrowserHistory();

function BootSetup() {
  // Save Platform Web
  StorageService.instance = new StorageService(localStorage);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          fontFamily: "DIN2014",
          colorPrimary: "#ED4C2F",
          borderRadius: 4,
          controlHeightLG: 48,
        },
        hashed: false,
      }}
    >
      <Provider store={store} history={history}>
        <App />
      </Provider>
    </ConfigProvider>
  );
}

export default BootSetup;
