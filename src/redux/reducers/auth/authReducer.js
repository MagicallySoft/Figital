// loginReducer

const initialState = {
  token: localStorage.getItem("userToken"),
  isAuthenticated: localStorage.getItem("userToken") ? true : false,
  loading: false,
  user: JSON.parse(localStorage.getItem("userData")),
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload.message,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
