// import { thunk } from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/index";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import localStorageMiddleware from "./localStorageMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;