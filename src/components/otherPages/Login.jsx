import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/action/auth/authActions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize form state with username, password, and rememberMe flag.
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedCredentials");
    if (remembered) {
      try {
        const parsed = JSON.parse(remembered);
        // Support both 'username' and legacy 'email' keys.
        const username = parsed.username || parsed.email || "";
        const password = parsed.password || "";
        setFormData({ username, password, rememberMe: true });
      } catch (error) {
        console.error("Error parsing remembered credentials:", error);
      }
    }
  }, []);

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
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
          username: formData.username,
          password: formData.password,
        })
      );
    } else {
      localStorage.removeItem("rememberedCredentials");
    }

    dispatch(loginUser({ username: formData.username, password: formData.password }, navigate)).then(
      () => {
        setFormData({ username: "", password: "", rememberMe: false });
      }
    )
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Login</h4>
            </div>
            <form onSubmit={handleSubmit} className="form-login form-has-password">
              <div className="wrap">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Username or email address*"
                    name="username"
                    tabIndex={2}
                    value={formData.username}
                    onChange={handleChange}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={passwordType}
                    placeholder="Password*"
                    name="password"
                    tabIndex={2}
                    value={formData.password}
                    onChange={handleChange}
                    aria-required="true"
                    required
                  />
                  <span
                    className={`toggle-password ${passwordType !== "text" ? "unshow" : ""}`}
                    onClick={togglePassword}
                  >
                    <i className={`icon-eye-${passwordType !== "text" ? "hide" : "show"}-line`} />
                  </span>
                </fieldset>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="login-form_agree"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label htmlFor="login-form_agree"> Remember me </label>
                  </div>
                  <Link to="/forget-password" className="font-2 text-button forget-password link">
                    Forgot Your Password?
                  </Link>
                </div>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-fill" type="submit">
                  <span className="text text-button">Login</span>
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h4 className="mb_8">New Customer</h4>
            <p className="text-secondary">
              Be part of our growing family of new customers! Join us today and unlock a world of exclusive benefits,
              offers, and personalized experiences.
            </p>
            <Link to="/register" className="tf-btn btn-fill">
              <span className="text text-button">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
