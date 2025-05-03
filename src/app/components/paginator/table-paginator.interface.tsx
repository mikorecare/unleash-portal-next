export interface ITablePaginatorProps {
  limit: number;
  count: number;
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}