import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/action/product/productAction";
import CompareSkeleton from "../SkeletonLoader/CompareSkeleton";

export default function ProductCompare() {
  // const dispatch = useDispatch()
  const { compareItem, addProductToCart, isAddedToCartProducts, products, loading, error, } = useContextElement();

  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([...products.filter((elm) => compareItem.includes(elm?.id))]);
  }, [compareItem, products]);
  if (loading && compareItem) {
    return <CompareSkeleton />;
  }
  console.log("compareItem--->\n", compareItem);
  
  return (
    <section className="flat-spacing">
      <div className="container">
        {!items.length ? (
          <div>
            No items to compare yet. Add products to your comparison list and
            decide smarter!{" "}
            <Link className="btn-line" href="/shop-default-grid">
              Explore Products
            </Link>
          </div>
        ) : (
          ""
        )}
        {items.length ? (
          <div className="tf-compare-table">
            <div className="tf-compare-row tf-compare-grid">
              <div className="tf-compare-col d-md-block d-none" />
              {items.map((elm, i) => (
                <div key={i} className="tf-compare-col">
                  <div className="tf-compare-item">
                    <Link
                      className="tf-compare-image"
                      to={`/product-detail/${elm.id}`}
                    >
                      <img
                        className="lazyload"
                        alt={elm.title}
                        data-src={`${BASE_URL}${elm.banner_img}`}
                        src={`${BASE_URL}${elm.banner_img}`}
                        width={600}
                        height={800}
                      />
                    </Link>
                    <div className="tf-compare-content">
                      <Link
                        className="link text-title text-line-clamp-1"
                        to={`/product-detail/${elm?.id}`}
                      >
                        {elm?.title}
                      </Link>
                      <p className="desc text-caption-1">
                        {elm?.category?.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Rating</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-rate"
                >
                  <div className="list-star">
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                  </div>
                  <span>(1.234)</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Price</h6>
              </div>

              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  
                  <span className="price">₹{Number(elm.discount_price)?.toFixed(2)}</span>
                  {elm?.price ? (
                      <>
                        <div className="compare-at-price font-2 text-decoration-line-through text-secondary">
                          ₹{Number(elm?.price)?.toFixed(2)}
                        </div>
                        {/* Calculate discount percentage automatically */}
                        {/* {elm?.discount_price < elm?.price && (
                          <div className="badges-on-sale text-btn-uppercase">
                            -{Math.round(
                              ((elm?.price - elm?.discount_price) / elm?.price) * 100
                            )}
                            %
                          </div>
                        )} */}
                      </>
                    ) : null}
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Type</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="type">Jacket</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Brand</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="brand">{elm?.brand?.title}</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>size</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">X, XS, L, M, XL</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Color</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <div className="list-compare-color justify-content-center">
                    <span className="item bg-pink" />
                    <span className="item bg-yellow" />
                    <span className="item bg-primary active" />
                    <span className="item bg-success" />
                    <span className="item bg-warning" />
                  </div>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Metarial</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">Cotton</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Add To Cart</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-viewcart text-center"
                >
                  <a
                    className="btn-view-cart"
                    onClick={() => addProductToCart(elm?.id)}
                  >
                    {isAddedToCartProducts(elm?.id)
                      ? "Already Added"
                      : "Add to Cart"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
