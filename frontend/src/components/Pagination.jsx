import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selected) => {
    onPageChange(selected.selected);
  };

  return (
    <div className="pagination-container">
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      pageClassName={'pagination-item'}
      previousClassName={'pagination-item'}
      nextClassName={'pagination-item'}
      activeClassName={'active'}

    />
    </div>
  );
};

export default Pagination;

