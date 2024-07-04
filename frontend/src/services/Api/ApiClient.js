// Service file that handle api client and there methods
import axios from "axios";
// storage instance
import StorageService from "services/StorageService";

// constants
import { API_TIMEOUT } from "constants/Common";
import { API_URLS } from "constants/ApiUrls";

export const apiClient = () => {
  const token = StorageService.instance.getAccessToken();
  let defaultOptions = {
    headers: {
      Authorization: token ? `Bearer ${token || null}` : "",
      "Content-Type": "application/json",
    },
  };
  // Request timeout
  defaultOptions = {
    ...defaultOptions,
    timeout: API_TIMEOUT,
  };

  return {
    post: (url, data, options = {}) =>
      axios.post(getUrl(url), data, { ...defaultOptions, ...options }),
  };
};

const getUrl = (url) => {
  let baseUrl = API_URLS.AUTH_APP_BASE_URL;
  return `${baseUrl}${url}`;
}