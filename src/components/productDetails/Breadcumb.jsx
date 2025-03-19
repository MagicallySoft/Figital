import React from "react";
import { Link, useLocation } from "react-router-dom";
import { allProducts } from "@/data/products";

export default function Breadcumb({ product }) {
  // console.log("Breadcumb------------->\n",product);
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";
  const { pathname } = useLocation();
  return (
    <div className="tf-breadcrumb">
      <div className="container">
        <div className="tf-breadcrumb-wrap">
          <div className="tf-breadcrumb-list">
            <Link to={`/`} className="text text-caption-1">
              Homepage
            </Link>

            <i className="icon icon-arrRight" />
            <span className="text text-caption-1">{product?.title}</span>
          </div>
          {/* <div className="tf-breadcrumb-prev-next">
            <Link
              to={`/${pathname.split("/")[1]}/${
                product?.id <= 1 ? 1 : product?.id 
              }`}
              className="tf-breadcrumb-prev"
            >
              <i className="icon icon-arrLeft" />
            </Link>
            <a href="#" className="tf-breadcrumb-back">
              <i className="icon icon-squares-four" /> next
            </a>
            <Link
              to={`/${pathname.split("/")[1]}/${
                product?.id >= allProducts.length ? 1 : product?.id 
              }`}
              className="tf-breadcrumb-next"
            >
              <i className="icon icon-arrRight" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
