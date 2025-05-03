import { Column, ColumnType } from "@/app/components/data-table/data-table.interface";
import { IProductOrder } from "@/models/product/product.interface";

export const productColums: Column<IProductOrder>[] = [
    {
      key: "orderId",
      label: "Order ID",
      type: ColumnType.Text,
    },
    {
      key: "latestStatus",
      label: "Status",
      type: ColumnType.Status,
    },
    {
      key: "paymentMethod",
      label: "Payment Method",
      type: ColumnType.Text,
    },
    {
      key: "paymentStatus",
      label: "Total",
      type: ColumnType.Number,
    },
  ];