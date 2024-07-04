// Service
import service from "services/Api/Service";
import StorageService from "services/StorageService";

// Constants
import { USER_ACTIONS } from "constants/ActionKeys";
import { API_URLS } from "constants/ApiUrls";

// General
import { handleAction } from ".";

function signup(signupModal) {
  return async (dispatch) => {
    try {
      dispatch(handleAction(USER_ACTIONS.SIGNUP_REQUEST));

      // API Calling
      const response = await service.postService(
        API_URLS.SIGNUP,
        signupModal,
        {}
      );

      dispatch(handleAction(USER_ACTIONS.SIGNUP_SUCCESS, response));

      return response;
    } catch (error) {
      dispatch(handleAction(USER_ACTIONS.SIGNUP_FAILURE));
      throw error;
    }
  };
}

function Signin(loginModel) {
  return async (dispatch) => {
    try {
      dispatch(handleAction(USER_ACTIONS.SIGNIN_REQUEST));

      // API Calling
      const response = await service.postService(
        API_URLS.SIGNIN,
        loginModel,
        {}
      );

      // Save Access Token
      const token = response?.data.data?.token || null;
      StorageService.instance.setAccessToken(token);
      dispatch(handleAction(USER_ACTIONS.SIGNIN_SUCCESS, response));

      return response;
    } catch (error) {
      dispatch(handleAction(USER_ACTIONS.SIGNIN_FAILURE));
      throw error;
    }
  };
}

function signout() {
  return async (dispatch) => {
    try {
      dispatch(handleAction(USER_ACTIONS.LOGOUT_REQUEST));
      await StorageService.instance.deleteLoginData();
      dispatch(handleAction(USER_ACTIONS.LOGOUT_SUCCESS));
    } catch (error) {
      dispatch(handleAction(USER_ACTIONS.LOGOUT_FAILURE, error));
      throw error;
    }
  };
}

export { signup, Signin, signout };
