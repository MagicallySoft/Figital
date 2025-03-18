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
  // console.log("currentPage---->", currentPage);
  
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
