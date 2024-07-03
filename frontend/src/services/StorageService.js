/*
  Stoage service file to store data in local storage.
    i - Set access token (store access token in local storage)
    ii - Get access token to validate user
    iii - Delete login info ( to logout )
*/

import { LOCAL_STORAGE_KEYS } from "constants/Storage";

export default class ReactStorageService {
  // Constuctor
  constructor(storage) {
    this.localStorage = storage;
  }

  // Set Access Token
  setAccessToken(accessToken) {
    this.localStorage.setItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      accessToken || null
    );
  }

  // Get Access Token
  getAccessToken() {
    try {
      const token = this.localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
      return token;
    } catch (error) {
      return "";
    }
  }

  // Delete Login Info
  deleteLoginData() {
    this.localStorage.clear();
  }

}
