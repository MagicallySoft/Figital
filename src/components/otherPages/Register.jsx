import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/action/auth/authActions";
import { useSelector } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import './custom.css'

export default function Register() {
  const { loading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(loading);
  // console.log(error);


  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    referral_code: "",
    gender: "male",
    password: "",
    confirmPassword: ""
  });

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password fields if needed
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Build the payload for registration.
    // Note: The API expects only specific fields.
    const payload = {
      full_name: formData.full_name,
      email: formData.email,
      contact_number: formData.contact_number,
      referral_code: formData.referral_code,
      gender: formData.gender,
      // Uncomment below if your API expects a password
      // password: formData.password,
    };

    // Dispatch the register action with payload and navigate callback
    console.log("payload-->", payload);

    dispatch(registerUser(payload, navigate));
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Register</h4>
            </div>
            {error && (
              <Alert variant="danger" className="login-alert">
                {error}
              </Alert>
            )}
            <form
              onSubmit={handleSubmit}
              className="form-login form-has-password"
            >
              <div className="wrap">
                {/* <fieldset className="">
                  <input
                    className=""
                    type="email"
                    placeholder="Username or email address*"
                    name="email"
                    tabIndex={2}
                    defaultValue=""
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
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <span
                    className={`toggle-password ${!(passwordType === "text") ? "unshow" : ""
                      }`}
                    onClick={togglePassword}
                  >
                    <i
                      className={`icon-eye-${!(passwordType === "text") ? "hide" : "show"
                        }-line`}
                    />
                  </span>
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={confirmPasswordType}
                    placeholder="Confirm Password*"
                    name="confirmPassword"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <span
                    className={`toggle-password ${!(confirmPasswordType === "text") ? "unshow" : ""
                      }`}
                    onClick={toggleConfirmPassword}
                  >
                    <i
                      className={`icon-eye-${!(confirmPasswordType === "text") ? "hide" : "show"
                        }-line`}
                    />
                  </span>
                </fieldset>
                <div className="d-flex align-items-center">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        defaultChecked
                        className=""
                        type="checkbox"
                        id="login-form_agree"
                        name="agree_checkbox"
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label
                      className="text-secondary-2"
                      htmlFor="login-form_agree"
                    >
                      I agree to the&nbsp;
                    </label>
                  </div>
                  <Link to={`/term-of-use`} title="Terms of Service">
                    Terms of User
                  </Link>
                </div>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-fill" type="submit">
                  <span className="text text-button">Register</span>
                </button> */}
                <fieldset>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Contact Number*"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    placeholder="Referral Code (optional)*"
                    name="referral_code"
                    value={formData.referral_code}
                    onChange={handleChange}
                  />
                </fieldset>
                {/* <fieldset>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </fieldset> */}
                <fieldset className="gender-slider">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>

                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  <label htmlFor="other">Other</label>
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    type={passwordType}
                    placeholder="Password*"
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
                <fieldset className="position-relative password-item">
                  <input
                    type={confirmPasswordType}
                    placeholder="Confirm Password*"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className={`toggle-password ${confirmPasswordType !== "text" ? "unshow" : ""}`}
                    onClick={toggleConfirmPassword}
                  >
                    <i
                      className={`icon-eye-${confirmPasswordType !== "text" ? "hide" : "show"
                        }-line`}
                    />
                  </span>
                </fieldset>
                <div className="d-flex align-items-center">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="register-form_agree"
                        name="agree_checkbox"
                        defaultChecked
                        required
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label className="text-secondary-2" htmlFor="register-form_agree">
                      I agree to the&nbsp;
                    </label>
                  </div>
                  <Link to={`/term-of-use`} title="Terms of Service">
                    Terms of Use
                  </Link>
                </div>
              </div>
              <div className="button-submit">
                <button
                  className="tf-btn btn-fill"
                  type="submit"
                  disabled={loading}>

                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      style={{
                        color: 'red',
                        zIndex: 9,
                      }}
                    />
                  ) : (<span className="text text-button">Register</span>)}

                </button>
              </div>
            </form>
            <div className="d-flex pt-3">
              <span>Already have an account?   &nbsp;</span>
              <Link to="/login" className=" text-decoration-underline text-primary">
                <span> Login now</span>
              </Link>
            </div>
          </div>
          <div className="right">
            <h4 className="mb_8">Welcome to Assuredcart</h4>
            <p className="text-secondary">
              Discover the best in electronic products. Experience unmatched innovation, lightning-fast delivery, and excellent customer service.
            </p>

            <div className="d-flex align-items-center my-3">
              <div className="tf-icon-box mx-3">
                <div className="icon-box">
                  <span className="icon icon-return" />
                </div>
              </div>
              <div className="content">
                <h6>14-Day Returns</h6>
                <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="tf-icon-box mx-3">
                <div className="icon-box">
                  <span className="icon icon-shipping" />
                </div>
              </div>
              <div className="content">
                <h6>Free Shipping</h6>
                <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="tf-icon-box mx-3">
                <div className="icon-box">
                  <span className="icon icon-headset" />
                </div>
              </div>
              <div className="content">
                <h6>24/7 Support</h6>
                <p className="m-0">on time dilivery with all safty checkups, best shipment service with up, so do not forgot to buy from us.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
