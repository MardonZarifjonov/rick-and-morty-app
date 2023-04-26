import styles from './styles.module.scss';
import { usePagination } from './hooks/usePagination';

export type PaginationProps = {
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  isError?: boolean;
  loading?: boolean;
};

export function Pagination({
  totalCount = 200,
  pageSize = 20,
  currentPage = 1,
  onPageChange = () => {},
  isError,
  loading,
}: PaginationProps) {
  const displayedRange = usePagination({ totalCount, pageSize, currentPage });
  const handleOnClick = (page: number | string) => {
    if (typeof page === 'number' && onPageChange) {
      if (page < 1) onPageChange(1);
      else onPageChange(page);
    }
  };

  if (isError) {
    return null;
  }

  return (
    <ul className={`${styles.Pagination} ${loading ? styles.Loading : ''}`}>
      {displayedRange.map((range, index) => {
        const key = `${range} + ${index}`;
        let isShowDots = false;
        let newPage = range;
        if (typeof range === 'string') {
          isShowDots = true;
          newPage =
            displayedRange.indexOf(currentPage) > index
              ? currentPage - 5
              : currentPage + 5;
        }

        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            onClick={() => handleOnClick(newPage)}
            role='presentation'
            className={currentPage === range ? styles.active : undefined}
          >
            <span className={isShowDots ? styles.dots : undefined}>
              {isShowDots ? '...' : range}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
