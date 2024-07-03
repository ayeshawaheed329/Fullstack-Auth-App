/*
    Component to show only private routes such as auth app's home page
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Application URL
import APP_URL from 'constants/ApplicationUrls';

// Service
import StorageService from 'services/StorageService';

export default function PrivateRoute ({ 
  component: Component, 
  ...rest 
}) {
  return (
    <Route {...rest} render={ props => {
      return (
        StorageService.instance.getAccessToken()
          ? <Component {...props} {...rest} />
          : <Redirect to={{ pathname: APP_URL.SIGNIN }} />
      )
    }
    } />
  )
}