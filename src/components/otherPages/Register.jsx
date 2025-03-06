import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
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
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Register</h4>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form-login form-has-password"
            >
              <div className="wrap">
                <fieldset className="">
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
            <h4 className="mb_8">Welcome to Modave</h4>
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
