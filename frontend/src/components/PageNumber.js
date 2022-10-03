import React from "react";
import '../styles/pagination.css'
const Pagination = ({ totalPage, page, handlePageChange }) => {
  return (
    <div className="pagination">
      <button
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
        id="prev-btn"
      >
        Prev
      </button>
      {page > 1 && page < totalPage ? (
        <span>
          <button>{page}</button>
        </span>
      ) : null}
      <button
        disabled={page >= totalPage}
        onClick={() => handlePageChange(page + 1)}
        id="next-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;