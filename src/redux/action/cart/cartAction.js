import axiosInstance from "../../../utlis/axiosInstance";
import { getLocalCart, setLocalCart, removeLocalCart } from "@/utlis/localStorageHelper";

// Action Types
export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const UPDATE_CART_REQUEST = "UPDATE_CART_REQUEST";
export const UPDATE_CART_SUCCESS = "UPDATE_CART_SUCCESS";
export const UPDATE_CART_FAILURE = "UPDATE_CART_FAILURE";

export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_FAILURE = "REMOVE_FROM_CART_FAILURE";

export const MERGE_LOCAL_CART = "MERGE_LOCAL_CART";

// Helper to extract error payload
const getErrorPayload = (error, defaultMsg = "Operation failed") => {
  return error.response?.data?.message || error.message || defaultMsg;
};

/**
 * getCart - Fetch cart from API
 */
export const getCart = () => async (dispatch) => {
  dispatch({ type: FETCH_CART_REQUEST });
  try {
    const response = await axiosInstance.get("/cart");
    // Prefer HTTP status code if available
    if (response.status !== 200 && response.data.code !== 200) {
      dispatch({
        type: FETCH_CART_FAILURE,
        payload: response.data.message || "Failed to fetch cart",
      });
    } else {
      dispatch({
        type: FETCH_CART_SUCCESS,
        payload: response.data.data, // cart items from backend
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: getErrorPayload(error, "Failed to fetch cart") });
  }
};

/**
 * addToCart - Add item to cart via API.
 * Fallback to local storage if offline or no token.
 */
export const addToCart = (product_id, qty = 1) => async (dispatch) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    // If no token, update local cart
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { product_id, qty },
    });
    return;
  }

  dispatch({ type: ADD_TO_CART_REQUEST });
  try {
    const requestBody = { product_id, qty, status: "active" };
    const response = await axiosInstance.post("/cart", requestBody);
    if (response.status !== 200 && response.data.code !== 200) {
      dispatch({
        type: ADD_TO_CART_FAILURE,
        payload: response.data.message || "Failed to add item to cart",
      });
    } else {
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: response.data.data, // updated cart or item
      });
    }
  } catch (error) {
    dispatch({ type: ADD_TO_CART_FAILURE, payload: getErrorPayload(error, "Failed to add item to cart") });
  }
};

/**
 * updateCart - Update cart item via API.
 * Fallback to local storage if offline or no token.
 */
export const updateCart = (cartItemId, qty) => async (dispatch) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { cartItemId, qty },
    });
    return;
  }

  dispatch({ type: UPDATE_CART_REQUEST });
  try {
    const requestBody = { qty, status: "active" };
    const response = await axiosInstance.put(`/cart/${cartItemId}`, requestBody);
    if (response.status !== 200 && response.data.code !== 200) {
      dispatch({
        type: UPDATE_CART_FAILURE,
        payload: response.data.message || "Failed to update cart",
      });
    } else {
      dispatch({
        type: UPDATE_CART_SUCCESS,
        payload: response.data.data,
      });
      dispatch(getCart());
    }
  } catch (error) {
    // console.log("ERROR--->", error);
    // console.log("Error Payload--->", getErrorPayload(error, "Failed to update cart"));
        
    dispatch({ type: UPDATE_CART_FAILURE, payload: getErrorPayload(error, "Failed to update cart") });
  }
};

/**
 * removeFromCart - Remove item from cart via API.
 * Fallback to local storage if offline or no token.
 */
export const removeFromCart = (cartItemId) => async (dispatch) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { remove: true, cartItemId },
    });
    return;
  }

  dispatch({ type: REMOVE_FROM_CART_REQUEST });
  try {
    const response = await axiosInstance.delete(`/cart/${cartItemId}`);
    if (response.status !== 200 && response.data.code !== 200) {
      dispatch({
        type: REMOVE_FROM_CART_FAILURE,
        payload: response.data.message || "Failed to remove from cart",
      });
    } else {
      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: cartItemId,
      });
    }
  } catch (error) {
    dispatch({ type: REMOVE_FROM_CART_FAILURE, payload: getErrorPayload(error, "Failed to remove from cart") });
  }
};

/**
 * mergeLocalCart - Merge local cart items with the server cart.
 * Optionally, consider batching these requests.
 */
export const mergeLocalCart = () => async (dispatch) => {
  const localCart = getLocalCart();
  if (!localCart.length) return;

  try {
    // For each local item, attempt to sync with the server
    for (let item of localCart) {
      await dispatch(addToCart(item.product_id, item.qty));
    }
    removeLocalCart();
  } catch (error) {
    console.error("Failed to merge local cart:", error);
  }
};
