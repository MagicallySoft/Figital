import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useContextElement } from "@/context/Context";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectLoading, selectError, selectPagination } from '@/redux/action/product/productSelectors';
import { fetchProducts } from "@/redux/action/product/productAction";

export default function Wishlist() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  const { removeFromWishlist, wishList } = useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([...products.filter((elm) => wishList.includes(elm.id))]);
  }, [wishList]);
  useEffect(() => {
    dispatch(fetchProducts(1));
  }, [dispatch]);
  // console.log("wishList---->", items);

  return (
    <div className="modal fullRight fade modal-wishlist" id="wishlist">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="header">
            <h5 className="title">Wish List</h5>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="wrap">
            <div className="tf-mini-cart-wrap">
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-sroll">
                  {items.length ? (
                    <div className="tf-mini-cart-items">
                      {items.map((elm, i) => (
                        <div key={i} className="tf-mini-cart-item file-delete">
                          <div className="tf-mini-cart-image">
                            <img
                              className="lazyload"
                              data-src={`${BASE_URL}${elm.banner_img}`}
                              src={`${BASE_URL}${elm.banner_img}`}
                              alt={elm.title}
                              width={600}
                              height={800}
                            />
                          </div>
                          <div className="tf-mini-cart-info flex-grow-1">
                            <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                              <div className="text-title">
                                <Link
                                  to={`/product-detail/${elm.id}`}
                                  className="link text-line-clamp-1"
                                >
                                  {elm.title}
                                </Link>
                              </div>
                              <div
                                className="text-button tf-btn-remove remove"
                                onClick={() => removeFromWishlist(elm.id)}
                              >
                                Remove
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                              <div className="text-secondary-2">XL/Blue</div>
                              <div className="text-button">
                                {/* ${elm.price.toFixed(2)} */}
                                ₹{Number(elm.price)?.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4">
                      Your wishlist is empty. Start adding your favorite
                      products to save them for later!{" "}
                      <Link className="btn-line" href="/shop-default-grid">
                        Explore Products
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="tf-mini-cart-bottom">
                <Link
                  to={`/wish-list`}
                  className="btn-style-2 w-100 radius-4 view-all-wishlist"
                >
                  <span className="text-btn-uppercase">View All Wish List</span>
                </Link>
                <Link to={`/shop-default-grid`} className="text-btn-uppercase">
                  Or continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
