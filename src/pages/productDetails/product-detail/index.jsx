import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
import Details1 from "@/components/productDetails/details/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import { useContextElement } from "@/context/Context";
import { fetchProducts } from "@/redux/action/product/productAction";
import { useDispatch } from "react-redux";
const metadata = {
  title: "Product Detail || Modave  ",
  description: "Modave  ",
};



export default function ProductDetailPage() {
  const dispatch = useDispatch()
  const { products, loading, error, pagination, } = useContextElement();
  let params = useParams();
  const id = params.id;

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };
  // useEffect(() => {
  //   dispatch(fetchProducts(1))
  // })
  useEffect(() => {
    handleResize(); // Check screen size on initial load
    window.addEventListener('resize', handleResize); // Add resize event listener

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const product = products.filter((p) => p.id == id)[0] || products[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      {isLargeScreen && <Topbar6 />}
      <Header11 />
      <Breadcumb product={product} />
      <Details1 product={product} loading={loading}/>
      <Descriptions1 />
      <RelatedProducts />
      <Footer1 dark />
    </>
  );
}
