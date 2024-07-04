import { USER_ACTIONS } from "constants/ActionKeys";

let initialState = {
  loading: false,
  error: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    // Sign up
    case USER_ACTIONS.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case USER_ACTIONS.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case USER_ACTIONS.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    // Signin
    case USER_ACTIONS.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case USER_ACTIONS.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case USER_ACTIONS.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // Logout
    case USER_ACTIONS.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case USER_ACTIONS.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case USER_ACTIONS.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default Auth;
