// const initialState = {
//     loading: false,
//     products: [],
//     pagination: {}, 
//     error: null,
//   };
  
//   const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "FETCH_PRODUCT_REQUEST":
//         return {
//           ...state,
//           loading: true,
//           error: null, 
//         };
//       case "FETCH_PRODUCT_SUCCESS":
//         return {
//           ...state,
//           loading: false,
//           products: action.payload.data,
//           pagination: action.payload.pagination, 
//         };
//       case "FETCH_PRODUCT_FAILURE":
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.message || action.payload, 
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default productReducer;
  


const initialState = {
  loading: false,
  products: [],       // current page products
  pages: {},          // cache: page number => products array
  pagination: {},
  currentPage: "",
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        // Cache the fetched page
        pages: {
          ...state.pages,
          [action.payload.page]: action.payload.data,
        },
        // Set current page and products for immediate display
        currentPage: action.payload.page,
        products: action.payload.data,
        pagination: action.payload.pagination,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
        products: state.pages[action.payload] || state.products,
        pagination: { ...state.pagination, current_page: action.payload },
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.message || action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
