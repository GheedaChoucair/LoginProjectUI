import axios from "axios";

const BASE_URL = "https://localhost:7184";

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/Login`,
      credentials
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || "Login failed");
    }
    throw new Error("Network error or server not reachable");
  }
};
