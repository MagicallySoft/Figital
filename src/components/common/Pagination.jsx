// import React, { useState } from "react";

// export default function Pagination({ totalPages = 3 }) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageClick = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const renderPageNumbers = () => {
//     return Array.from({ length: totalPages }, (_, index) => {
//       const page = index + 1;
//       return (
//         <li
//           key={page}
//           className={page === currentPage ? "active" : ""}
//           onClick={() => handlePageClick(page)}
//         >
//           <div className="pagination-item text-button">{page}</div>
//         </li>
//       );
//     });
//   };

//   return (
//     <>
//       <li onClick={() => handlePageClick(currentPage - 1)}>
//         <a
//           className={`pagination-item text-button ${
//             currentPage === 1 ? "disabled" : ""
//           }`}
//         >
//           <i className="icon-arrLeft" />
//         </a>
//       </li>
//       {renderPageNumbers()}
//       <li onClick={() => handlePageClick(currentPage + 1)}>
//         <a
//           className={`pagination-item text-button ${
//             currentPage === totalPages ? "disabled" : ""
//           }`}
//         >
//           <i className="icon-arrRight" />
//         </a>
//       </li>
//     </>
//   );
// }

import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      return (
        <li 
          key={page} 
          className={page === currentPage ? "active" : ""}
          onClick={() => handlePageClick(page)}
        >
          <span className="pagination-item text-button">{page}</span>
        </li>
      );
    });
  };

  return (
    <>
      <li 
        onClick={() => handlePageClick(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <span className="pagination-item text-button">
          <i className="icon-arrLeft" />
        </span>
      </li>
      {renderPageNumbers()}
      <li 
        onClick={() => handlePageClick(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <span className="pagination-item text-button">
          <i className="icon-arrRight" />
        </span>
      </li>
    </>
  );
}
