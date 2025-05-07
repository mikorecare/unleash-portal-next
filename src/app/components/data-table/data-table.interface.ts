import { ITableFilter } from "../filter/table-filter.interface";
import { DataTableCellActionEnum } from "./data-table-cell.interface";

export enum ColumnType {
    Text = "text",
    Image = "image",
    Date = "date",
    Number = "number",
    OrderStatus = "order-status",
    Button = "button",
    Action = "action",
    Currency = "currency",
    PaymentStatus = "payment-status",
    PhoneNumber = "phone-number",
    MerchantStatus = "merchant-status"
  }
  
export interface Column<T> {
    key: keyof T;
    label?: string;
    img? : string;
    type?: ColumnType;
    minWidth?: string;
    width?: string;
    buttonText?: string;
    onClick?: (item: T) => void;
    sortKey?: keyof ITableFilter;

    actions?: DataTableCellActionEnum[]
    accessor?: (item: T) => any;
}

export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    isLoading: boolean;
    children?: React.ReactNode;
}