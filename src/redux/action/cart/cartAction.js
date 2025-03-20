import axiosInstance from "../../../utlis/axiosInstance";

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

/**
 * getCart - Fetch cart from API
 */
export const getCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_CART_REQUEST });

    // Attempt to fetch cart from server
    const response = await axiosInstance.get("/cart");
    // Check your API's success code
    if (response.data.code !== 200) {
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
    const errorPayload =
      error.response?.data || error.message || "Failed to fetch cart";
    dispatch({ type: FETCH_CART_FAILURE, payload: errorPayload });
  }
};

/**
 * addToCart - Add item to cart via API
 * fallback to local storage if offline or no token
 */
export const addToCart = (product_id, qty = 1) => async (dispatch, getState) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    // If user not logged in, store in local storage
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { product_id, qty },
    });
    return;
  }

  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    const requestBody = { product_id, qty, status: "active" };
    const response = await axiosInstance.post("/cart", requestBody);

    if (response.data.code !== 200) {
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
    const errorPayload = error.response?.data || error.message;
    console.log("errorPayload----->\n", errorPayload);
    
    dispatch({ type: ADD_TO_CART_FAILURE, payload: errorPayload });
  }
};

/**
 * updateCart - Update cart item via API
 * fallback to local storage if offline or no token
 */
export const updateCart = (cartItemId, qty) => async (dispatch, getState) => {
  console.log(cartItemId, qty);
  
  const token = localStorage.getItem("userToken");
  if (!token) {
    // Update local storage if user is offline
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { cartItemId, qty },
    });
    return;
  }

  try {
    dispatch({ type: UPDATE_CART_REQUEST });

    const requestBody = { qty, status: "active" };
    console.log(requestBody);
    
    const response = await axiosInstance.put(`/cart/${cartItemId}`, requestBody);
    console.log(response);
    
    if (response.data.code !== 200) {
      dispatch({
        type: UPDATE_CART_FAILURE,
        payload: response.data.message || "Failed to update cart",
      });
    } else {
      dispatch({
        type: UPDATE_CART_SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    const errorPayload = error.response?.data || error.message;
    dispatch({ type: UPDATE_CART_FAILURE, payload: errorPayload });
  }
};

/**
 * removeFromCart - Remove item from cart via API
 * fallback to local storage if offline or no token
 */
export const removeFromCart = (cartItemId) => async (dispatch, getState) => {
  const token = localStorage.getItem("userToken");
  if (!token) {
    // remove from local storage
    dispatch({
      type: MERGE_LOCAL_CART,
      payload: { remove: true, cartItemId },
    });
    return;
  }

  try {
    dispatch({ type: REMOVE_FROM_CART_REQUEST });
    console.log("cartItemId------>", cartItemId);
    
    const response = await axiosInstance.delete(`/cart/${cartItemId}`);

    if (response.data.code !== 200) {
      dispatch({
        type: REMOVE_FROM_CART_FAILURE,
        payload: response.data.message || "Failed to remove from cart",
      });
    } else {
      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: cartItemId, // the ID of the removed item
      });
    }
  } catch (error) {
    const errorPayload = error.response?.data || error.message;
    console.log("errorPayload---->\n", errorPayload);
    
    dispatch({ type: REMOVE_FROM_CART_FAILURE, payload: errorPayload });
  }
};

/**
 * mergeLocalCart - merges local storage cart items with the server cart
 * after user logs in or is back online
 */
export const mergeLocalCart = () => async (dispatch, getState) => {
  // read local storage cart items
  const localCart = JSON.parse(localStorage.getItem("cartList")) || [];
  if (!localCart.length) return;

  try {
    // attempt to sync each item
    for (let item of localCart) {
      await dispatch(addToCart(item.product_id, item.qty));
    }
    // if successful, clear local cart
    localStorage.removeItem("cartList");
  } catch (error) {
    console.error("Failed to merge local cart:", error);
  }
};
