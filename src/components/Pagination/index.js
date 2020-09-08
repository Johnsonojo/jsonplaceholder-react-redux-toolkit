import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={() => {
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
