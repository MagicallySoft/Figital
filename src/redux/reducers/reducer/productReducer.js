const initialState = {
    loading: false,
    products: [],
    pagination: {}, 
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
          products: action.payload.data,
          pagination: action.payload.pagination, 
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
  