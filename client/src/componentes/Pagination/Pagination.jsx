import React from "react";
import "./Pagination.css";

export default function Pagination({
  showPerPage,
  mascotasState,
  pagination,
  page,
}) {
  const pageNumber = [];
  const total = Math.ceil(mascotasState / showPerPage) + 1;
  for (let i = 1; i < total; i++) {
    pageNumber.push(i);
  }

  const modo = localStorage.getItem('modo');

  return (
    <div className={`pagination ${modo}`}>
      <button
        className="buttonPagination"
        onClick={page > 1 ? () => pagination(page - 1) : null}
        hidden={page === 1 ? true : false}
      >
        Prev
      </button>
      {pageNumber &&
        pageNumber.map((n) => (
          <button
            className="buttonPagination"
            key={n}
            onClick={() => pagination(n)}
          >
            {" "}
            {n}{" "}
          </button>
        ))}

      <button
        className="buttonPagination"
        onClick={page < total ? () => pagination(page + 1) : null}
        hidden={page === total - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
}
