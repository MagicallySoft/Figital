import React from "react";
import ProductsCards6 from "../productCards/ProductsCards6";
import Pagination from "../common/Pagination";
import SkeletonLoader2 from "../SkeletonLoader/skeletonLoadder_2";

export default function Listview({ loading, products, pagination, onPageChange, currentPage, totalPages }) {
  // Display loader or error if needed
  if (loading) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonLoader2 key={index}  />
        ))}
      </>
    );
  }

  return (
    <>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductsCards6  product={product} key={product.id} />
        ))
      ) : (
        <div>No products found.</div>
      )}
      {pagination && totalPages > 1 && (
        <ul className="wg-pagination">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </ul>
      )}
    </>
  );
}
