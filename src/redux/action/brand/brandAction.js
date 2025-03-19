import axiosInstance from "../../../utlis/axiosInstance";

export const fetchBrands = () => async (dispatch, getState) => {

  // const { brand } = getState();
  // if (brand.brands && brand.brands.length > 0) {
  //   // Skip fetching if brands are already in Redux store
  //   return;
  // }

  try {
    dispatch({ type: "FETCH_BRAND_REQUEST" });

    const response = await axiosInstance.get("/brand/list");
    // Check for success based on your API's custom code
    // console.log(response);
    
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
      console.log(errorPayload);
      
    dispatch({ type: "FETCH_BRAND_FAILURE", payload: errorPayload });
  }
};
