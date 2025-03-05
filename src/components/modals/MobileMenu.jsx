import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import {
  blogLinks,
  demoItems,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  shopLayout,
  swatchLinks,
  categories
} from "@/data/menu";
import { useAuth } from "@/context/AuthProvider";
import { logoutUser } from "@/redux/action/auth/authActions";


export default function MobileMenu() {
  const { user, isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <form className="form-search" onSubmit={(e) => e.preventDefault()}>
              <fieldset className="text">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className=""
                  name="text"
                  tabIndex={0}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <button className="" type="submit">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.9984 20.9999L16.6484 16.6499"
                    stroke="#181818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              {
                categories.map((category, index) => {
                  const menuId = `dropdown-menu-${index + 1}`;
                  return (
                    <li className="nav-mb-item active" key={index}>
                      <a
                        href={`#${menuId}`}
                        className={`collapsed mb-menu-link ${[...categories].some(
                          (elm) => elm.href.split("/")[1] === pathname.split("/")[1]
                        )
                          ? "active"
                          : ""
                          }`}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls={menuId}
                      >
                        <span>{category.name}</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id={menuId} className="collapse">
                        <ul className="sub-nav-menu">
                          {category.children?.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] === link.href.split("/")[1]
                                  ? "active"
                                  : ""
                                  }`}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })
              }

              {/* <li className="nav-mb-item active">
                <a
                  href="#dropdown-menu-one"
                  className={`collapsed mb-menu-link ${[...demoItems].some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                  )
                    ? "active"
                    : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-one"
                >
                  <span>Home</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-one" className="collapse">
                  <ul className="sub-nav-menu">
                    {demoItems.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.href}
                          className={`sub-nav-link ${pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                            } `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li> */}
              {/* <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-two"
                  className={`collapsed mb-menu-link ${[
                      ...shopLayout,
                      ...shopFeatures,
                      ...productStyles,
                      ...otherShopMenus,
                    ].some(
                      (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                    )
                      ? "active"
                      : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-two"
                >
                  <span>Shop</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-two" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a
                        href="#sub-shop-one"
                        className={`sub-nav-link collapsed ${[...shopLayout].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-one"
                      >
                        <span>Shop layout</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {shopLayout.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-two"
                        className={`sub-nav-link collapsed ${[...shopFeatures].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-two"
                      >
                        <span>Shop Features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {shopFeatures.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-three"
                        className={`sub-nav-link collapsed ${[...productStyles].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-three"
                      >
                        <span>Products Hover</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {productStyles.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-four"
                        className={`sub-nav-link collapsed ${[...otherShopMenus].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-four"
                      >
                        <span>My Pages</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-four" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {otherShopMenus.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-three"
                  className={`collapsed mb-menu-link ${[...productLinks, ...swatchLinks, ...productFeatures].some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                  )
                      ? "active"
                      : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-three"
                >
                  <span>Products</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-three" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a
                        href="#sub-product-one"
                        className={`sub-nav-link collapsed ${[...productLinks].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-one"
                      >
                        <span>Products Layout</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {productLinks.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-two"
                        className={`sub-nav-link collapsed ${[...swatchLinks].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-two"
                      >
                        <span>Colors Swatched</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {swatchLinks.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-three"
                        className={`sub-nav-link collapsed ${[...productFeatures].some(
                          (elm) =>
                            elm.href.split("/")[1] == pathname.split("/")[1]
                        )
                            ? "active"
                            : ""
                          } `}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-three"
                      >
                        <span>Products Features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          {productFeatures.map((link, i) => (
                            <li key={i}>
                              <Link
                                to={link.href}
                                className={`sub-nav-link ${pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                    ? "active"
                                    : ""
                                  } `}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-four"
                  className={`collapsed mb-menu-link ${[...blogLinks].some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                  )
                      ? "active"
                      : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-four"
                >
                  <span>Blog</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-four" className="collapse">
                  <ul className="sub-nav-menu">
                    {blogLinks.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.href}
                          className={`sub-nav-link ${pathname.split("/")[1] == link.href.split("/")[1]
                              ? "active"
                              : ""
                            } `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-five"
                  className={`collapsed mb-menu-link ${[...otherPageLinks].some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                  )
                      ? "active"
                      : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-five"
                >
                  <span>Pages</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-five" className="collapse">
                  <ul className="sub-nav-menu">
                    {otherPageLinks.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.href}
                          className={`sub-nav-link ${pathname.split("/")[1] == link.href.split("/")[1]
                              ? "active"
                              : ""
                            } `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="https://themeforest.net/user/themesflat"
                  className="mb-menu-link"
                >
                  Buy Theme
                </a>
              </li> */}
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="group-icon">
              {isAuthenticated ? (<Link onClick={() => dispatch(logoutUser())} className="site-nav-icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Logout
              </Link>) : null}
              
              <Link to={isAuthenticated ? '/my-account' : '/login'} className="site-nav-icon">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isAuthenticated ? (
                  <span className="user-name">&nbsp;{user?.user || "User"}</span>
                ) : (
                  "Login"
                )}

              </Link>
            </div>
            <div className="mb-notice">
              <Link to={`/contact`} className="text-need">
                Need Help?
              </Link>
            </div>
            <div className="mb-contact">
              <p className="text-caption-1">
                549 Oak St.Crystal Lake, IL 60014
              </p>
              <Link
                to={`/contact`}
                className="tf-btn-default text-btn-uppercase"
              >
                GET DIRECTION
                <i className="icon-arrowUpRight" />
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                <i className="icon icon-mail" />
                <p>themesflat@gmail.com</p>
              </li>
              <li>
                <i className="icon icon-phone" />
                <p>315-666-6688</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <CurrencySelect />
            </div>
            <div className="tf-languages">
              <LanguageSelect parentClassName="image-select center style-default type-languages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
