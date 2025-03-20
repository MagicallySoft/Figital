import axios from "axios";
import axiosInstance from "../../../utlis/axiosInstance";

export const fetchBrands = () => async (dispatch, getState) => {

  // const { brand } = getState();
  // if (brand.brands && brand.brands.length > 0) {
  //   // Skip fetching if brands are already in Redux store
  //   return;
  // }

  try {
    dispatch({ type: "FETCH_BRAND_REQUEST" });
    const token = "23|rYUdSGlPKeUagp9j2STX0glktsnWg4RfnQoENzWJeeec0370"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // const response = await axiosInstance.get("/admin/brand/list");
    const response = await axios.get("https://ecomapi.tallytdls.in/api/v1/admin/brand/list", config);
    // Check for success based on your API's custom code
    if (response.data.code !== 200) {
      dispatch({
        type: "FETCH_BRAND_FAILURE",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "FETCH_BRAND_SUCCESS",
        payload: response.data.data,
      });
    }
  } catch (error) {
    const errorPayload =
      error.response && error.response.data ? error.response.data : error.message;
    dispatch({ type: "FETCH_BRAND_FAILURE", payload: errorPayload });
  }
};
