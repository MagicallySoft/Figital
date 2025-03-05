import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import RecentProducts from "@/components/otherPages/RecentProducts";
import ShopCart from "@/components/otherPages/ShopCart";
import { Link } from "react-router-dom";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shopping Cart || Modave  ",
  description: "Modave  ",
};

export default function ShopingCartPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6  />
      <Header11 />
      {/* <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container">
          <h3 className="heading text-center">Shopping Cart</h3>
          <ul className="breadcrumbs d-flex align-items-center justify-content-center">
            <li>
              <Link className="link" to={`/`}>
                Homepage
              </Link>
            </li>
            <li>
              <i className="icon-arrRight" />
            </li>
            <li>
              <Link className="link" to={`/shop-default-grid`}>
                Shop
              </Link>
            </li>
            <li>
              <i className="icon-arrRight" />
            </li>
            <li>Shopping Cart</li>
          </ul>
        </div>
      </div> */}

      <ShopCart />
      <RecentProducts />
      <Footer1 dark/>
    </>
  );
}
