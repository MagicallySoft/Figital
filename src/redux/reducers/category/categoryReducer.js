const initialState = {
    loading: false,
    categories: [],
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CATEGORY_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_CATEGORY_SUCCESS":
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case "FETCH_CATEGORY_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload?.message || action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  