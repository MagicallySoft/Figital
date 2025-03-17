import axiosInstance from "../../../utlis/axiosInstance";

export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_CATEGORY_REQUEST" });

    const response = await axiosInstance.get("/admin/category");

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

    // Dispatch the error to the store
    dispatch({ type: "FETCH_CATEGORY_FAILURE", payload: errorPayload });
  }
};
