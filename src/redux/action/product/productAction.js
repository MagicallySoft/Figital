// import axiosInstance from "../../../utlis/axiosInstance";

// export const fetchProducts = (page = 1) => async (dispatch) => {
//   try {
//     dispatch({ type: "FETCH_PRODUCT_REQUEST" });
    
//     const response = await axiosInstance.get(`/admin/product?page=${page}`);
//     // console.log("Action response:-------->", response);

//     // Check the custom status code in the API response
//     if (response.data.code !== 200) {
//       // Dispatch error if the status code indicates a problem
//       dispatch({ 
//         type: "FETCH_PRODUCT_FAILURE", 
//         payload: response.data.message 
//       });
//     } else {
//       dispatch({
//         type: "FETCH_PRODUCT_SUCCESS",
//         payload: response.data, // contains { data, pagination, message, code }
//       });
//     }
//   } catch (error) {
//     const errorPayload =
//       error.response && error.response.data
//         ? error.response.data
//         : error.message;
//     dispatch({ type: "FETCH_PRODUCT_FAILURE", payload: errorPayload });
//   }
// };




import axiosInstance from "../../../utlis/axiosInstance";

export const fetchProducts = (page = 1) => async (dispatch, getState) => {
  // Check if data for the requested page is already cached
  const { product } = getState();
  if (product.pages && product.pages[page]) {
    // Optionally dispatch an action to update the current page without loading
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
    return;
  }

  dispatch({ type: "FETCH_PRODUCT_REQUEST", payload: { page } });
  try {
    const response = await axiosInstance.get(`/product?page=${page}`);
    if (response.data.code !== 200) {
      dispatch({ 
        type: "FETCH_PRODUCT_FAILURE", 
        payload: response.data.message 
      });
    } else {
      dispatch({
        type: "FETCH_PRODUCT_SUCCESS",
        payload: { 
          data: response.data.data, 
          pagination: response.data.pagination,
          page,
        },
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
