import { ITableFilter } from "../filter/table-filter.interface";

export interface ITablePaginatorProps {
  limit: number;
  count: number;
  totalPages: number;
  page: number;
  onPageChange: (filter: ITableFilter) => void;
}