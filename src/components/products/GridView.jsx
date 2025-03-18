import React from "react";
import ProductCard1 from "../productCards/ProductCard1";
import Pagination from "../common/Pagination";
import SkeletonLoader from "./SkeletonLoader";

export default function GridView({ loading, products, pagination, onPageChange, currentPage, totalPages }) {
  // Display loader or error if needed
  if (loading) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonLoader key={index} gridClass="grid" />
        ))}
      </>
    );
  }
  return (
    <>
      {/* <div className="wg-products-loader d-flex flex-wrap justify-content-around"> */}
      {/* {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonLoader key={index} gridClass="grid" />
      ))} */}
      {/* </div> */}
      {products.map((product, index) => (
        <ProductCard1 key={index} product={product} gridClass="grid" />
      ))}
      {/* pagination */}

      {pagination && totalPages > 1 && (
        <ul className="wg-pagination justify-content-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </ul>
      )}
    </>
  );
}
