// import React from "react";
// import ProductsCards6 from "../productCards/ProductsCards6";
// import Pagination from "../common/Pagination";

// export default function Listview({ products, pagination = true }) {
//   return (
//     <>
//       {/* card product list 1 */}
//       {products.map((product, i) => (
//         <ProductsCards6 product={product} key={i} />
//       ))}
//       {/* pagination */}
//       {pagination ? (
//         <ul className="wg-pagination ">
//           <Pagination />
//         </ul>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }


import React from "react";
import ProductsCards6 from "../productCards/ProductsCards6";
import Pagination from "../common/Pagination";

export default function Listview({ products, pagination, onPageChange, currentPage, totalPages }) {



  return (
    <>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductsCards6 product={product} key={product.id} />
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
