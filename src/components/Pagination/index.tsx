import React from "react";
import classnames from "classnames";
import arrowRight from "../../assests/img/arrow-right.svg"
import arrowLeft from "../../assests/img/arrow-left.svg"

import { usePagination, DOTS } from "../../hooks/usePagination";
import "./pagination.scss";
const Pagination = (props: {
  onPageChange: any;
  totalCount: any;
  siblingCount?: 1 | undefined;
  currentPage: any;
  pageSize: any;
  className: any;
}) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item special", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
               <img src={arrowLeft} alt="arrow left" className="arrowLeft"/>

      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item special", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <img src={arrowRight} alt="arrow right" />
        {/* <div className="arrow right" /> */}
      </li>
    </ul>
  );
};

export default Pagination;
