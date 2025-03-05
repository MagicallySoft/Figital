import axiosInstance from "../../../utlis/axiosInstance";
import { jwtDecode } from "jwt-decode";

export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    const { token } = response.data;

    const decodedUserData = jwtDecode(token);

    localStorage.setItem("userToken", token);
    localStorage.setItem("userData", JSON.stringify(decodedUserData));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token, user: decodedUserData },
    });
    if (navigate) {
      navigate(-1);
    }
  } catch (error) {
    const errorPayload =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    dispatch({ type: "LOGIN_FAILURE", payload: errorPayload });
  }
};

export const logoutUser = () => (dispatch) => {
  // Clear localStorage on logout
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");

  dispatch({
    type: "LOGOUT_USER",
  });
};
