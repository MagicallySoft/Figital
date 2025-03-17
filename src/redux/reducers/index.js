import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import registerReducer from "./auth/registerReducer";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./reducer/productReducer";
import brandReducer from "./brand/brandReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  category: categoryReducer,
  product: productReducer,
  brand: brandReducer,
  
});

export default rootReducer;
