import React from 'react';
import styles from './UI.module.css'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div>
      <button className={styles.pagination} onClick={onPrevPage} disabled={currentPage === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
      <button className={styles.pagination} onClick={onNextPage} disabled={currentPage === totalPages}>
        &#10095;
      </button>
    </div>
  );
};

export default Pagination;
