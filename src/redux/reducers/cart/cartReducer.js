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
import { setLocalCart } from "@/utlis/localStorageHelper";

const initialState = {
  loading: false,
  items: [],
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
      return { ...state, loading: false, items: action.payload, error: null };
    case ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- UPDATE CART -------------
    case UPDATE_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_CART_SUCCESS: {
      const updatedItem = action.payload;
      const updatedItems = state.items.map((item) =>
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
      const { product_id, qty, remove, cartItemId } = action.payload;
      let updated = [...state.items];

      if (remove && cartItemId) {
        updated = updated.filter((item) => item.id !== cartItemId);
      } else if (product_id && qty) {
        const index = updated.findIndex((itm) => itm.product_id === product_id);
        if (index !== -1) {
          updated[index] = { ...updated[index], qty: updated[index].qty + qty };
        } else {
          updated.push({ product_id, qty });
        }
      }
      // Update local storage for persistence
      setLocalCart(updated);
      return { ...state, items: updated };
    }

    default:
      return state;
  }
};

export default cartReducer;
