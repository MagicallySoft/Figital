import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import DetailsFixedprice from "@/components/productDetails/details/DetailsFixedprice";

import { allProducts } from "@/data/products";
import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Product Fixed Price || Modave  ",
  description: "Modave  ",
};

export default function ProductFixedProcePage() {
  let params = useParams();
  const id = params.id;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6  />
      <Header11 />
      <Breadcumb product={product} />
      <DetailsFixedprice product={product} />

      <Footer1 hasPaddingBottom />
    </>
  );
}
