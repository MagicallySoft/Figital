import axiosInstance from "../../../utlis/axiosInstance";

export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST",  });

    const response = await axiosInstance.post("/signup", userData, {
      headers: {
        Authorization: "uOddiZliFen9pZyBMLBaGZhhXG2J3ENpeB6HOovzvhQ",
      },
    });
    console.log("Register:", response);
    console.log("Register response:", response.data);

    // If the API returns a token on successful registration, you may decode and store it.
    // Otherwise, you can simply dispatch the user data.
    // const token = response.data.token;
    // let decodedUserData = null;
    // if (token) {
    //   decodedUserData = jwtDecode(token);
    //   localStorage.setItem("userToken", token);
    //   localStorage.setItem("userData", JSON.stringify(decodedUserData));
    // }

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: { token, user: response.data.data },
    });

    // Navigate to the login page or dashboard after successful registration.
    if (navigate) {
      navigate("/login");
    }
  } catch (error) {
    console.log("EROR!!-->", error);

    const errorPayload =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    dispatch({ type: "REGISTER_FAILURE", payload: errorPayload });
  }
};

export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST",  });
    const contact_number = { contact_number: "8866116731" };
    // const response = await axiosInstance.post("/login", contact_number, {
    const response = await axiosInstance.post("/access", credentials, {
      headers: {
        Authorization: "uOddiZliFen9pZyBMLBaGZhhXG2J3ENpeB6HOovzvhQ",
      },
    });
    // console.log("response", response);
    // console.log("response", response.data);
    // console.log("Token", response.data.token);

    // Use the token directly as a string
    const token = response.data.token;
    // console.log("Token--->", token);

    // Store the token and user data properly in localStorage
    localStorage.setItem("userToken", token);
    localStorage.setItem("userData", JSON.stringify(response.data.data));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token, user: response.data.data },
    });

    if (navigate) {
      navigate(-1);
    }
  } catch (error) {
    console.log("EROR!!-->", error);
    const errorPayload =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    dispatch({ type: "LOGIN_FAILURE", payload: errorPayload });
    // console.log("\nerrorPayload-->", errorPayload);
    
  }
};

export const logoutUser = () => (dispatch) => {
  // Clear localStorage on logout
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");

  dispatch({
    type: "LOGOUT_USER",
  });
};
