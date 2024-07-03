/*
  Routes for whole application
*/

import React from 'react';
import APPLICATION_URL from 'constants/ApplicationUrls';
import LOCALIZATION from "constants/Localization";

// Left Menus
const Home = React.lazy(() => import('../components/home'));

const routes = [
  // Home Page
  { path: APPLICATION_URL.HOME, exact: true, name: LOCALIZATION.HOME, component: Home },

];

export default routes;