/*
  This file will have all the reducers. As of now for auth app, need Auth reducer only
*/
import { combineReducers } from 'redux';

import Auth from 'store/reducers/AuthReducer';


const rootReducer = combineReducers({
  Auth: Auth
});

export default rootReducer;

