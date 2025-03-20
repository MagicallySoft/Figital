import axios from "axios";
import axiosInstance from "../../../utlis/axiosInstance";

export const fetchCategory = () => async (dispatch, getState) => {

  const { category } = getState();
  if (category.categories && category.categories.length > 0) {
    // Skip fetching if categories are already in Redux store
    return;
  }

  try {
    dispatch({ type: "FETCH_CATEGORY_REQUEST" });
    const token = "23|rYUdSGlPKeUagp9j2STX0glktsnWg4RfnQoENzWJeeec0370"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // const response = await axiosInstance.get("/admin/category");
    const response = await axios.get("https://ecomapi.tallytdls.in/api/v1/admin/category",config);

    // console.log("response--->", response);
    
    // Check if the response structure is as expected
    if (response.data?.code !== 200) {
      dispatch({
        type: "FETCH_CATEGORY_FAILURE",
        payload: response.data?.message || "Something went wrong",
      });
    } else {
      dispatch({
        type: "FETCH_CATEGORY_SUCCESS",
        payload: response.data?.data || [],
      });
    }
  } catch (error) {
    const errorPayload = error.response?.data || error.message;
    // console.log("errorPayload---->\n", errorPayload);
    
    // Dispatch the error to the store
    dispatch({ type: "FETCH_CATEGORY_FAILURE", payload: errorPayload });
  }
};
