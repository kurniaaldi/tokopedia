import React from "react";

interface IPropsPagination {
  next: (page: number) => void;
  currentPage: number;
  previous: (page: number) => void;
  hasNextPage: boolean;
  total?: number;
}

const Pagination = (props: IPropsPagination) => {
  const { next, previous, hasNextPage, currentPage } = props;

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <li style={{ cursor: "pointer" }} onClick={() => previous(currentPage)}>
          &laquo;
        </li>
      )}
      <li className="active">{currentPage}</li>

      {hasNextPage && (
        <li style={{ cursor: "pointer" }} onClick={() => next(currentPage)}>
          &raquo;
        </li>
      )}
    </div>
  );
};

export default Pagination;
