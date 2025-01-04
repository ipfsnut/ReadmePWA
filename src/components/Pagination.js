import React from "react";
import styles from "../styles/styles";

const Pagination = ({ currentPage, nextPage, prevPage, paginatedNFTs, nftsPerPage }) => {
  return (
    <div style={styles.pagination}>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={nextPage} disabled={paginatedNFTs.length < nftsPerPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;