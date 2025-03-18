import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useContextElement } from "@/context/Context";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";



export default function Products3() {
  const { products, loading, error, addProductToCart } = useContextElement();

  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  const [skeletonCount, setSkeletonCount] = useState(2);
  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setSkeletonCount(4);
      } else if (width >= 768) {
        setSkeletonCount(4);
      } else if (width >= 480) {
        setSkeletonCount(3);
      } else {
        setSkeletonCount(2);
      }
    };
    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  // Shuffle function
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Slice the first 3 products from the shuffled array
  const featuredProducts = shuffleArray([...products]).slice(0, 3);
  const newArrivals = shuffleArray([...products]).slice(0, 3);
  const maybeYouWillLove = shuffleArray([...products]).slice(0, 3);

  if (loading) {
    return (
      <section className="flat-spacing-4 pt-0">
        <div className="container">
          <div className="grid-loader-wrapper d-flex justify-content-between">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    <div className="error">
      <Alert variant="danger" className="login-alert">
        {error}
      </Alert>
    </div>
  }


  return (
    <section className="flat-spacing-4">
      <div className="container">
        <div className="grid-card-product tf-grid-layout lg-col-3 md-col-2">
          <div className="column-card-product">
            <h5 className="heading wow fadeInUp">Featured products</h5>
            <div className="list-card-product">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="card-product list-st-2 wow fadeInUp"
                >
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="lazyload img-product"
                        data-src={`${BASE_URL}${product.banner_img}`}
                        src={`${BASE_URL}${product.banner_img}`}
                        alt={product.title}
                        width={600}
                        height={800}
                      />
                      <img
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={600}
                        height={800}
                      />
                    </Link>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">
                        {product.salePercentage}
                      </span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <div className="bottom">
                      <div className="inner-left">
                        <div className="box-rating">
                          <ul className="list-star">
                            {[...Array(product.rating)].map((_, starIndex) => (
                              <li key={starIndex} className="icon icon-star" />
                            ))}
                          </ul>
                          <span className="text-caption-1 text-secondary">
                            ({product.reviews})
                          </span>
                        </div>
                        <span className="price py-4">
                          ₹{Number(product.discount_price)?.toFixed(2)}
                        </span>
                      </div>
                      <a
                        onClick={() => addProductToCart(product.id)}
                        className="box-icon"
                      >
                        <svg
                          width={25}
                          height={24}
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.2187 10.3327V5.99935C16.2187 4.85008 15.7622 3.74788 14.9495 2.93522C14.1369 2.12256 13.0347 1.66602 11.8854 1.66602C10.7361 1.66602 9.63394 2.12256 8.82129 2.93522C8.00863 3.74788 7.55208 4.85008 7.55208 5.99935V10.3327M4.30208 8.16602H19.4687L20.5521 21.166H3.21875L4.30208 8.16602Z"
                            stroke="#181818"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="column-card-product">
            <h5 className="heading wow fadeInUp">New Arrivals</h5>
            <div className="list-card-product">
              {newArrivals.map((product, index) => (
                <div
                  key={index}
                  className="card-product list-st-2 wow fadeInUp"
                >
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="lazyload img-product"
                        data-src={`${BASE_URL}${product.banner_img}`}
                        src={`${BASE_URL}${product.banner_img}`}
                        alt={product.title}
                        width={600}
                        height={800}
                      />
                      <img
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={600}
                        height={800}
                      />
                    </Link>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">
                        {product.salePercentage}
                      </span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <div className="bottom">
                      <div className="inner-left">
                        <div className="box-rating">
                          <ul className="list-star">
                            {[...Array(product.rating)].map((_, starIndex) => (
                              <li key={starIndex} className="icon icon-star" />
                            ))}
                          </ul>
                          <span className="text-caption-1 text-secondary">
                            ({product.reviews})
                          </span>
                        </div>
                        <span className="price py-4">
                          ₹{Number(product.discount_price)?.toFixed(2)}
                        </span>
                      </div>
                      <a
                        onClick={() => addProductToCart(product.id)}
                        className="box-icon"
                      >
                        <svg
                          width={25}
                          height={24}
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.2187 10.3327V5.99935C16.2187 4.85008 15.7622 3.74788 14.9495 2.93522C14.1369 2.12256 13.0347 1.66602 11.8854 1.66602C10.7361 1.66602 9.63394 2.12256 8.82129 2.93522C8.00863 3.74788 7.55208 4.85008 7.55208 5.99935V10.3327M4.30208 8.16602H19.4687L20.5521 21.166H3.21875L4.30208 8.16602Z"
                            stroke="#181818"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="column-card-product">
            <h5 className="heading wow fadeInUp">Maybe you will love</h5>
            <div className="list-card-product">
              {maybeYouWillLove.map((product, index) => (
                <div
                  key={index}
                  className="card-product list-st-2 wow fadeInUp"
                >
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="lazyload img-product"
                        data-src={`${BASE_URL}${product.banner_img}`}
                        src={`${BASE_URL}${product.banner_img}`}
                        alt={product.title}
                        width={600}
                        height={800}
                      />
                      <img
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={600}
                        height={800}
                      />
                    </Link>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">
                        {product.salePercentage}
                      </span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <div className="bottom">
                      <div className="inner-left">
                        <div className="box-rating">
                          <ul className="list-star">
                            {[...Array(product.rating)].map((_, starIndex) => (
                              <li key={starIndex} className="icon icon-star" />
                            ))}
                          </ul>
                          <span className="text-caption-1 text-secondary">
                            ({product.reviews})
                          </span>
                        </div>
                        <span className="price py-4">
                          ₹{Number(product.discount_price)?.toFixed(2)}
                        </span>
                      </div>
                      <a
                        onClick={() => addProductToCart(product.id)}
                        className="box-icon"
                      >
                        <svg
                          width={25}
                          height={24}
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.2187 10.3327V5.99935C16.2187 4.85008 15.7622 3.74788 14.9495 2.93522C14.1369 2.12256 13.0347 1.66602 11.8854 1.66602C10.7361 1.66602 9.63394 2.12256 8.82129 2.93522C8.00863 3.74788 7.55208 4.85008 7.55208 5.99935V10.3327M4.30208 8.16602H19.4687L20.5521 21.166H3.21875L4.30208 8.16602Z"
                            stroke="#181818"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
