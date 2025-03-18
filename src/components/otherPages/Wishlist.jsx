import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
import ProductCard1 from "../productCards/ProductCard1";
import Pagination from "../common/Pagination";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "@/redux/action/product/productSelectors";
import { fetchProducts } from "@/redux/action/product/productAction";

export default function Wishlist() {
  const { removeFromWishlist, wishList } = useContextElement();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";
  const [items, setItems] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    setItems([...products.filter((elm) => wishList.includes(elm.id))]);
  }, [wishList]);
  // console.log("Wishllist--->", wishList);
  
  return (
    <section className="flat-spacing">
      <div className="container">
        {items.length ? (
          <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
            {/* card product 1 */}
            {items.map((product, i) => (
              <ProductCard1 key={i} product={product} />
            ))}

            {/* pagination */}
            <ul className="wg-pagination justify-content-center">
              <Pagination />
            </ul>
          </div>
        ) : (
          <div className="p-5">
            Your wishlist is empty. Start adding your favorite products to save
            them for later!{" "}
            <Link className="btn-line" href="/shop-default-grid">
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
