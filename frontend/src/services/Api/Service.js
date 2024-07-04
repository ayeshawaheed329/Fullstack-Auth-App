import { apiClient } from "services/Api/ApiClient";

// POST Service
const postService = async (url, data, opt = {}) => {
  try {
    const response = await apiClient().post(url, data, opt);

    return response;
  } catch (error) {
    throw error;
  }
};

// import services
export default {
  postService,
};
