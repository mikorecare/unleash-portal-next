import { DataTableCellActionEnum } from "@/app/components/data-table/data-table-cell.interface";
import {
    Column,
    ColumnType,
} from "@/app/components/data-table/data-table.interface";
import { IProductOrder } from "@/models/product/product.interface";

export const productColums: Column<IProductOrder>[] = [
    {
        key: "merchant",
        accessor: (item) => item.merchant.profilePicture,
        label: "Shop Profile",
        type: ColumnType.Image,
    },
    {
        key: "transactionId",
        label: "Transaction ID",
        type: ColumnType.Text,
        sortKey: "transactionId",
    },
    {
        key: "orderId",
        label: "Order ID",
        type: ColumnType.Text,
        sortKey: "orderId",
    },
    {
        key: "merchant",
        label: "Shop Name",
        type: ColumnType.Text,
        accessor: (item) => item.merchant.name,
    },
    {
        key: "categoryType",
        label: "Category",
        type: ColumnType.Text,
    },
    {
        key: "user",
        label: "Customer Name",
        type: ColumnType.Text,
        accessor: (item) => item.user.fullName,
        sortKey: "customerName",
    },
    {
        key: "datePurchased",
        label: "Date Purchased",
        type: ColumnType.Date,
    },
    {
        key: "orderQuantity",
        label: "Order Quantity",
        type: ColumnType.Text,
    },
    {
        key: "totalPrice",
        label: "Total Price",
        type: ColumnType.Currency,
    },
    {
        key: "paymentStatus",
        label: "Payment Status",
        type: ColumnType.PaymentStatus,
    },
    {
        key: "paymentMethod",
        label: "Payment Method",
        type: ColumnType.Text,
    },
    {
        key: "totalShippingFee",
        label: "Delivery Fee",
        type: ColumnType.Currency,
    },
    {
        key: "orderStatus",
        label: "Order Status",
        type: ColumnType.OrderStatus,
        accessor: (item) => item.orderStatus[0].status,
    },
    {
        key: "orderId",
        label: "Action",
        type: ColumnType.Action,
        actions: [
            DataTableCellActionEnum.APPROVED,
            DataTableCellActionEnum.CANCELLED,
            DataTableCellActionEnum.EDIT,
            DataTableCellActionEnum.VIEW,
        ],
    },
];
