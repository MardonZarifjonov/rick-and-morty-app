import { PaginationProps } from '..';

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export function usePagination({
  currentPage = 1,
  pageSize = 20,
  totalCount = 1,
}: Pick<PaginationProps, 'totalCount' | 'pageSize' | 'currentPage'>) {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  const leftPageIndex = currentPage - 1 || 1;
  const rightPageIndex = currentPage + 1;
  const showLeftDots = leftPageIndex > 2 && totalPageCount > 6;
  const showRightDots =
    rightPageIndex < totalPageCount - 2 && totalPageCount > 6;

  let displayedRange: (number | string)[] = [];

  if (!showLeftDots && showRightDots) {
    const leftPageItems = range(firstPageIndex, 4);
    displayedRange = [...leftPageItems, 'DOTS', lastPageIndex];
  }

  if (showLeftDots && !showRightDots) {
    const rightPageItems = range(totalPageCount - 4, totalPageCount);
    displayedRange = [firstPageIndex, 'DOTS', ...rightPageItems];
  }

  if (showLeftDots && showRightDots) {
    const middlePages = range(leftPageIndex, rightPageIndex);
    displayedRange = [
      firstPageIndex,
      'DOTS',
      ...middlePages,
      'DOTS',
      lastPageIndex,
    ];
  }

  if (!showLeftDots && !showRightDots) {
    displayedRange = range(firstPageIndex, totalPageCount);
  }

  return displayedRange;
}
