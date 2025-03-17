import axiosInstance from "../../../utlis/axiosInstance";

export const fetchProducts = (page = 1) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PRODUCT_REQUEST" });
    
    const response = await axiosInstance.get(`/admin/product?page=${page}`);
    // console.log("Action response:-------->", response);

    // Check the custom status code in the API response
    if (response.data.code !== 200) {
      // Dispatch error if the status code indicates a problem
      dispatch({ 
        type: "FETCH_PRODUCT_FAILURE", 
        payload: response.data.message 
      });
    } else {
      dispatch({
        type: "FETCH_PRODUCT_SUCCESS",
        payload: response.data, // contains { data, pagination, message, code }
      });
    }
  } catch (error) {
    const errorPayload =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    dispatch({ type: "FETCH_PRODUCT_FAILURE", payload: errorPayload });
  }
};
