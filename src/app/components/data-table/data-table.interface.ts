export enum ColumnType {
    Text = "text",
    Image = "image",
    Date = "date",
    Number = "number",
    Status = "status",
    Button = "button",
    Action = "action"
  }
  
export interface Column<T> {
    key: keyof T;
    label: string;
    type?: ColumnType;
    minWidth?: string;
    width?: string;
    buttonText?: string;
    onClick?: (item: T) => void;
}

export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    isLoading: boolean;
}