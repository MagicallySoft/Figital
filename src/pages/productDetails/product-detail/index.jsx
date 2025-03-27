import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
import Details1 from "@/components/productDetails/details/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import MetaComponent from "@/components/common/MetaComponent";
import { useContextElement } from "@/context/Context";
import { fetchProducts } from "@/redux/action/product/productAction";

const metadata = {
  title: "Product Detail || Assuredcart",
  description: "Assuredcart",
};

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useContextElement();
  const { id } = useParams();

  // State to track if the screen is large enough to show Topbar6
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Memoize the resize handler to prevent re-creations on each render.
  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Optionally fetch products on mount if not already done.
  // useEffect(() => {
  //   dispatch(fetchProducts(1));
  // }, [dispatch]);

  // Memoize the filtered product to avoid recomputation on each render.
  const product = useMemo(() => {
    return products.find((p) => p.id == id) || products[0];
  }, [products, id]);

  return (
    <>
      <MetaComponent meta={metadata} />
      {isLargeScreen && <Topbar6 />}
      <Header11 />
      <Breadcumb product={product} />
      <Details1 product={product} loading={loading} error={error}/>
      <Descriptions1 />
      <RelatedProducts />
      <Footer1 dark />
    </>
  );
};

// Wrap the component with React.memo to prevent unnecessary re-renders.
export default React.memo(ProductDetailPage);
