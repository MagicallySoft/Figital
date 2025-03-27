import React from "react";
import { Link } from "react-router-dom";
export default function ForgotPass() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4 className="mb_8">Reset your password</h4>
              <p>We will send you an email to reset your password</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="form-login">
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
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-fill" type="submit">
                  <span className="text text-button">Submit</span>
                </button>
              </div>
            </form>
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

