import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import registerReducer from "./auth/registerReducer";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";
import brandReducer from "./brand/brandReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  category: categoryReducer,
  product: productReducer,
  brand: brandReducer,
  cart: cartReducer,
});

export default rootReducer;
