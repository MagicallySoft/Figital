import { useContextElement } from "@/context/Context";
// import { product } from "@/data/products";

import React, { useState } from "react";
import QuantitySelect from "./QuantitySelect";
import SizeSelect2 from "./SideSelect2";

export default function ProductStikyBottom({ product, loading }) {
  const {
    addProductToCart,
    isAddedToCartProducts,

    cartProducts,
    updateQuantity,
  } = useContextElement();
  // console.log("Product--->", product);

  const [quantity, setQuantity] = useState(1); // Initial quantity is 1
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  return (
    <div className="tf-sticky-btn-atc">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form
              className="form-sticky-atc"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="tf-sticky-atc-product">
                <div className="image">
                  <img
                    className="lazyload"
                    alt={product?.title}
                    src={`${BASE_URL}${product?.banner_img}`}
                    width={600}
                    height={800}
                  />
                </div>
                <div className="content">
                  <div className="text-title">{product?.title}</div>
                  <div className="text-caption-1 text-secondary-2">
                    {product?.category?.title}
                  </div>
                  {/* <div className="text-title">
                    ₹{Number(product?.discount_price)?.toFixed(2)}
                  </div> */}
                  <div className="tf-product-info-price">
                    <h6 className="price-on-sale font-2">
                      ₹{Number(product?.discount_price)?.toFixed(2)}
                    </h6>
                    {product?.price ? (
                      <>
                        <div className="compare-at-price font-2">
                          ₹{Number(product?.price)?.toFixed(2)}
                        </div>
                        {/* Calculate discount percentage automatically */}
                        {product?.discount_price < product?.price && (
                          <div className="badges-on-sale text-btn-uppercase">
                            -{Math.round(
                              ((product?.price - product?.discount_price) / product?.price) * 100
                            )}
                            %
                          </div>
                        )}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="tf-sticky-atc-infos">
                <SizeSelect2 />
                <div className="tf-sticky-atc-quantity d-flex gap-12 align-items-center">
                  <div className="tf-sticky-atc-infos-title text-title">
                    Quantity:
                  </div>
                  <QuantitySelect
                    styleClass="style-1"
                    quantity={
                      isAddedToCartProducts(product.id)
                        ? cartProducts.filter(
                          (elm) => elm.id == product.id
                        )[0].quantity
                        : quantity
                    }
                    setQuantity={(qty) => {
                      if (isAddedToCartProducts(product.id)) {
                        updateQuantity(product.id, qty);
                      } else {
                        setQuantity(qty);
                      }
                    }}
                  />
                </div>
                <div className="tf-sticky-atc-btns">
                  <a
                    onClick={() => addProductToCart(product.id, quantity)}
                    className="tf-btn w-100 btn-reset radius-4 btn-add-to-cart"
                  >
                    <span className="text text-btn-uppercase">
                      {" "}
                      {isAddedToCartProducts(product.id)
                        ? "Already Added"
                        : "Add to cart -"}
                    </span>
                    <span className="tf-qty-price total-price">
                    ₹
                      {isAddedToCartProducts(product.id)
                        ? (
                          product.discount_price *
                          cartProducts.filter(
                            (elm) => elm.id == product.id
                          )[0].quantity
                        ).toFixed(2)
                        : (product.discount_price * quantity).toFixed(2)}
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
