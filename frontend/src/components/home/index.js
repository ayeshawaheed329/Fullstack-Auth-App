import React from "react";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";

// Localization
import LOCALIZATION from "constants/Localization";

// Actions
import { signout } from "store/actions/AuthActions";

// Constants
import APP_URL from "constants/ApplicationUrls";

function Layout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout())?.then(() => {
      history.push(APP_URL.SIGNIN);
    });
  };

  return (
    <div className="layout-container">
      <h1 className="layout-header">{LOCALIZATION.WELCOME_MSG}</h1>
      <button className="logout-button" onClick={handleSignout}>
        {LOCALIZATION.SIGNOUT}
      </button>
    </div>
  );
}

export default Layout;
