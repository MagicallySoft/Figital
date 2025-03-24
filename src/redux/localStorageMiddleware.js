// localStorageMiddleware.js
import { setLocalCart } from "@/utlis/localStorageHelper";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Check if the action is one of the cart success actions
  const cartSuccessActions = [
    "FETCH_CART_SUCCESS",
    "ADD_TO_CART_SUCCESS",
    "UPDATE_CART_SUCCESS",
    "REMOVE_FROM_CART_SUCCESS",
    "MERGE_LOCAL_CART"
  ];

  if (cartSuccessActions.includes(action.type)) {
    const { cart } = store.getState();
    setLocalCart(cart.items);
  }
  return result;
};

export default localStorageMiddleware;
