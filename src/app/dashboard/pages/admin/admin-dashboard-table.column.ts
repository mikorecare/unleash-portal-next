import { DataTableCellActionEnum } from "@/app/components/data-table/data-table-cell.interface";
import { Column, ColumnType } from "@/app/components/data-table/data-table.interface";
import { IMerchant } from "@/models/merchant/merchant.interface";

export const adminColumns: Column<IMerchant>[] = [
    {
        key: "profilePicture",
        label: "Shop Profile",
        type: ColumnType.Image,
    },
    {
        key: "location",
        label: "Location",
        type: ColumnType.Text,
    },
    {
        key: "phoneNumber",
        label: "Phone Number",
        type: ColumnType.PhoneNumber,
        accessor: (phone)=> `${phone.phoneNumberPrefix} ${phone.phoneNumber}`
    },
    {
        key: "email",
        label: "Email",
        type: ColumnType.Text,
    },
    {
        key: "owner",
        label: "Owner",
        type: ColumnType.Text,
        accessor: (item) => `${item.owner?.firstName || "---"} ${item.owner?.lastName || ""}`
    },
    {
        key: "totalOfProducts",
        label: "Total Products",
        type: ColumnType.Number,
    },
    {
        key: "status",
        label: "Status",
        type: ColumnType.MerchantStatus,
    },
    {
        key: "id",
        label: "Action",
        type: ColumnType.Action,
        actions: [
            DataTableCellActionEnum.EDIT,
            DataTableCellActionEnum.DELETE
        ],
    },
];