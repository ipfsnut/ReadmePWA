import React from "react";
import { lightTheme, darkTheme } from "../styles/styles"; // Update import

const Pagination = ({ currentPage, nextPage, prevPage, paginatedNFTs, nftsPerPage, theme }) => {
  const styles = theme === "dark" ? darkTheme : lightTheme; // Use the correct theme

  return (
    <div style={styles.pagination}>
      <button onClick={prevPage} disabled={currentPage === 1} style={styles.closeButton}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={nextPage}
        disabled={paginatedNFTs.length < nftsPerPage}
        style={styles.closeButton}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;