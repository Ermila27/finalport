// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        &laquo; Previous
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            currentPage === number
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        Next &raquo;
      </button>
    </nav>
  );
};

export default Pagination;