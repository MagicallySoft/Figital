const initialState = {
    loading: false,
    brands: [],
    error: null,
  };
  
  const brandReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_BRAND_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_BRAND_SUCCESS":
        return {
          ...state,
          loading: false,
          brands: action.payload,
        };
      case "FETCH_BRAND_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload?.message || action.payload,
        };
      default:
        return state;
    }
  };
  
  export default brandReducer;
  