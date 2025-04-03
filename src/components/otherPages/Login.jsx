// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginUser } from "@/redux/action/auth/authActions";
// import { useAuth } from "@/context/AuthProvider";
// import { Alert, Spinner } from "react-bootstrap";

// export default function Login() {
//   const { loading, error } = useAuth();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // console.log(loading);



//   // Initialize form state with email, password, and rememberMe flag.
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [passwordType, setPasswordType] = useState("password");

//   useEffect(() => {
//     const remembered = localStorage.getItem("rememberedCredentials");
//     if (remembered) {
//       try {
//         const parsed = JSON.parse(remembered);
//         // Support both 'username' and legacy 'email' keys.
//         const email = parsed.username || parsed.email || "";
//         const password = parsed.password || "";
//         setFormData({ email, password, rememberMe: true });
//       } catch (error) {
//         console.error("Error parsing remembered credentials:", error);
//       }
//     }
//   }, []);

//   const togglePassword = () => {
//     setPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };


//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.rememberMe) {
//       localStorage.setItem(
//         "rememberedCredentials",
//         JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         })
//       );
//     } else {
//       localStorage.removeItem("rememberedCredentials");
//     }

//     dispatch(loginUser({ email: formData.email, password: formData.password }, navigate)).then(
//       () => {
//         setFormData({ email: "", password: "", rememberMe: false });
//       }
//     )
//   };

//   return (
//     <>
//         <section className="flat-spacing">
//         <div className="container">
//           <div className="login-wrap">
//             <div className="left">
//               <div className="heading">
//                 <p>WELCOME BACK </p>
//                 <h4>Continue to your Account.</h4>
//               </div>
//               {error && (
//                 <Alert variant="danger" className="login-alert">
//                   {error}
//                 </Alert>
//               )}
//               <form onSubmit={handleSubmit} className="form-login form-has-password">
//                 <div className="wrap">
//                   <fieldset>
//                     <input
//                       type="text"
//                       placeholder="Username or email address*"
//                       name="email"
//                       tabIndex={2}
//                       value={formData.email}
//                       onChange={handleChange}
//                       aria-required="true"
//                       required
//                     />
//                   </fieldset>
//                   <fieldset className="position-relative password-item">
//                     <input
//                       className="input-password"
//                       type={passwordType}
//                       placeholder="Password*"
//                       name="password"
//                       tabIndex={2}
//                       value={formData.password}
//                       onChange={handleChange}
//                       aria-required="true"
//                       required
//                     />
//                     <span
//                       className={`toggle-password ${passwordType !== "text" ? "unshow" : ""}`}
//                       onClick={togglePassword}
//                     >
//                       <i className={`icon-eye-${passwordType !== "text" ? "hide" : "show"}-line`} />
//                     </span>
//                   </fieldset>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="tf-cart-checkbox">
//                       <div className="tf-checkbox-wrapp">
//                         <input
//                           type="checkbox"
//                           id="login-form_agree"
//                           name="rememberMe"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <div>
//                           <i className="icon-check" />
//                         </div>
//                       </div>
//                       <label htmlFor="login-form_agree"> Remember me </label>
//                     </div>
//                     <Link to="/forget-password" className="font-2 text-button forget-password link">
//                       Forgot Your Password?
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="button-submit">
//                   <button className="tf-btn btn-fill" type="submit" disabled={loading}>
//                     {loading ? (
//                       <Spinner
//                         as="span"
//                         animation="border"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                         style={{
//                           color: 'red',
//                           zIndex: 9,
//                         }}
//                       />
//                     ) : (<span className="text text-button">Login</span>)}

//                   </button>
//                 </div>
//               </form>
//               <div className="d-flex pt-3">
//                 <span>Don't have an account ?  &nbsp;</span>
//                 <Link to="/register" className=" text-decoration-underline text-primary">
//                   <span> Register now</span>
//                 </Link>
//               </div>
//               {/* <p>or</p>
//             <div className="mt-3 mb-3">
//               <p>Login with Google</p>
//               <i className="bg-secondary rounded-5 p-3">
//                 <FcGoogle className="modern-google-icon" />
//               </i>

//             </div> */}
//             </div>
//             <div className="right">
//               <h4 className="mb_8">Welcome to Assuredcart</h4>
//               <p className="text-secondary">
//                 Discover the best in electronic products. Experience unmatched innovation, lightning-fast delivery, and excellent customer service.
//               </p>

//               <div className="d-flex align-items-center my-3">
//                 <div className="tf-icon-box mx-3">
//                   <div className="icon-box">
//                     <span className="icon icon-return" />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h6>14-Day Returns</h6>
//                   <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center my-3">
//                 <div className="tf-icon-box mx-3">
//                   <div className="icon-box">
//                     <span className="icon icon-shipping" />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h6>Free Shipping</h6>
//                   <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center my-3">
//                 <div className="tf-icon-box mx-3">
//                   <div className="icon-box">
//                     <span className="icon icon-headset" />
//                   </div>
//                 </div>
//                 <div className="content">
//                   <h6>24/7 Support</h6>
//                   <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
//                 </div>
//               </div>


//             </div>


//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/action/auth/authActions";
import { useAuth } from "@/context/AuthProvider";
import { Alert, Spinner } from "react-bootstrap";
import "./custom.css"

export default function Login() {
  const { loading, error } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("error--->", error);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedCredentials");
    if (remembered) {
      try {
        const parsed = JSON.parse(remembered);
        const email = parsed.username || parsed.email || "";
        const password = parsed.password || "";
        setFormData({ email, password, rememberMe: true });
      } catch (error) {
        console.error("Error parsing remembered credentials:", error);
      }
    }
  }, []);

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.rememberMe) {
      localStorage.setItem(
        "rememberedCredentials",
        JSON.stringify({
          email: formData.email,
          password: formData.password,
        })
      );
    } else {
      localStorage.removeItem("rememberedCredentials");
    }

    dispatch(loginUser({ email: formData.email, password: formData.password }, navigate))
      .then(() => {
        setFormData({ email: "", password: "", rememberMe: false });
      });
  };

  return (
    <section className="login-section">
      <div className="container login-container">
        {/* Left side: login form */}
        <div className="login-form-container">
          <div className="login-header">
            <img
              src="/path/to/your-logo.png"
              alt="Logo"
              className="brand-logo"
            />
            <p>WELCOME BACK</p>
            <h4>Continue to your Account</h4>
          </div>

          {error && (
            <Alert variant="danger" className="login-alert">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="form-login">
            {/* “Log in with Google” button or other social logins */}
            <button type="button" className="social-login-btn google-btn">
              <i className="icon-google" />
              Log in with Google
            </button>

            <div className="or-divider">
              <span>OR</span>
            </div>

            <fieldset>
              <input
                type="text"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="password-fieldset">
              <input
                className="input-password"
                type={passwordType}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className={`toggle-password ${passwordType !== "text" ? "unshow" : ""}`}
                onClick={togglePassword}
              >
                <i className={`icon-eye-${passwordType !== "text" ? "hide" : "show"}-line`} />
              </span>
            </fieldset>

            <div className="options-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <Link to="/forget-password" className="forgot-link">
                Forgot your password?
              </Link>
            </div>
          
            <button className="login-btn d-flex justify-content-center" type="submit" disabled={loading}>
              {loading ? (
               <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  style={{ color: "red", zIndex: 9 }}
                /><span className="text text-button">Login</span>
               </>
              ) : (
                <span className="text text-button">Login</span>
              )}
            </button>
          </form>

          <div className="register-redirect">
            <span>Don't have an account?</span>
            <Link to="/register">Register now</Link>
          </div>
        </div>

        {/* Right side: phone / promotional graphic */}
        <div className="login-graphic-container">
          <img
            src="/path/to/phone-mockup.png"
            alt="App Preview"
            className="phone-graphic"
          />
          <div className="graphic-text">
            <h4>Shop Latest Technological Products</h4>
            <p>Discover the best in electronics with unmatched innovation and speed.</p>
            <div className="app-download-badges">
              <img src="/path/to/appstore-badge.png" alt="App Store" />
              <img src="/path/to/googleplay-badge.png" alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
