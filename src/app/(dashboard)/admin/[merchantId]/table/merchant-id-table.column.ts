import { DataTableCellActionEnum } from "@/app/components/data-table/data-table-cell.interface";
import {
    Column,
    ColumnType,
} from "@/app/components/data-table/data-table.interface";
import { Category } from "@/models/dashboard/dashboard-analytics.interface";

export const merchatIdColumn: Column<Category>[] = [
    {
        key: "name",
        label: "Category",
        type: ColumnType.Text,
    },
    {
        key: "total",
        label: "Total Products",
        type: ColumnType.Number,
    },
    {
        key: "name",
        label: "Actions",
        type: ColumnType.Action,
        actions: new Map<DataTableCellActionEnum, (category: string) => void>([
            [DataTableCellActionEnum.VIEW, (category: string) => category],
        ]),
    },
];
