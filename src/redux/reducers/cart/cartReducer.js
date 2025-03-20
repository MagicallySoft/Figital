import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  MERGE_LOCAL_CART,
} from "@/redux/action/cart/cartAction";

const initialState = {
  loading: false,
  items: [], // Current cart items
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------- FETCH CART -------------
    case FETCH_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CART_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: null };
    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- ADD TO CART -------------
    case ADD_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_TO_CART_SUCCESS:
      // The API might return the entire updated cart or just the new item
      // Here, let's assume it returns the entire cart
      return { ...state, loading: false, items: action.payload, error: null };
    case ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- UPDATE CART -------------
    case UPDATE_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_CART_SUCCESS: {
      const updatedItem = action.payload;
      const updatedItems = state.items.map((item) =>
        // Check if the item's id (or product_id) matches the updated item's id
        item.id === updatedItem.id || item.product_id === updatedItem.product_id
          ? { ...item, ...updatedItem }
          : item
      );
      return { ...state, loading: false, items: updatedItems, error: null };
    }
    case UPDATE_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- REMOVE FROM CART -------------
    case REMOVE_FROM_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case REMOVE_FROM_CART_SUCCESS:
      // The payload is the cartItemId that was removed
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== action.payload),
        error: null,
      };
    case REMOVE_FROM_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- MERGE LOCAL CART -------------
    case MERGE_LOCAL_CART: {
      // If user is offline or no token, store cart data in local storage or in state
      // We'll do it in local storage, but let's also keep it in the Redux store
      const { product_id, qty, remove, cartItemId } = action.payload;

      // Clone current items
      let updated = [...state.items];

      // If removing an item
      if (remove && cartItemId) {
        updated = updated.filter((item) => item.id !== cartItemId);
      }
      // If adding/updating
      else if (product_id && qty) {
        // check if item is in cart
        const idx = updated.findIndex((itm) => itm.product_id === product_id);
        if (idx !== -1) {
          // update qty
          updated[idx] = { ...updated[idx], qty: updated[idx].qty + qty };
        } else {
          // add new item
          updated.push({ product_id, qty });
        }
      }

      // store in local storage
      localStorage.setItem("cartList", JSON.stringify(updated));
      return { ...state, items: updated };
    }

    default:
      return state;
  }
};

export default cartReducer;
