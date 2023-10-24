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
    <div className={styles.container}>
      <button className={styles.pagination} onClick={onPrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button className={styles.pagination} onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
