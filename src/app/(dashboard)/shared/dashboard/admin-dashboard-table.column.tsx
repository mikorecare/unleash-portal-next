"use client";

import { DataTableCellActionEnum } from "@/app/components/data-table/data-table-cell.interface";
import {
    Column,
    ColumnType,
} from "@/app/components/data-table/data-table.interface";
import { showGenericModal } from "@/app/components/modal/generic-modal.component";
import { IMerchant } from "@/models/merchant/merchant.interface";
import AdminDashboardDeleteModal from "../../components/modals/admin-dashboard-delete.modal";

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
        accessor: (phone) => `${phone.phoneNumberPrefix} ${phone.phoneNumber}`,
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
        accessor: (item) =>
            `${item.owner?.firstName || "---"} ${item.owner?.lastName || ""}`,
    },
    {
        key: "totalOfProducts",
        label: "Total Products",
        type: ColumnType.Number,
    },
    {
        key: "createdAt",
        label: "Join Date",
        type: ColumnType.Date,
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
        actions: new Map<DataTableCellActionEnum, (orderId: string) => void>([
            [
                DataTableCellActionEnum.EDIT,
                (orderId: string) => `${orderId}`,
            ],
            [
                DataTableCellActionEnum.DELETE,
                (orderId: string) =>
                    showGenericModal(
                        "Delete this Store",
                        (close) => <AdminDashboardDeleteModal id={orderId} close={close} />,
                        <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="22"
                                cy="22"
                                r="22"
                                fill="#F45E4E"
                                fillOpacity="0.1"
                            />
                            <path
                                d="M30.75 16C30.75 16.414 30.414 16.75 30 16.75H14C13.586 16.75 13.25 16.414 13.25 16C13.25 15.586 13.586 15.25 14 15.25H18.214C18.307 15.068 18.379 14.862 18.456 14.632L18.658 14.025C18.862 13.413 19.435 13 20.081 13H23.919C24.565 13 25.138 13.413 25.342 14.025L25.544 14.632C25.621 14.862 25.693 15.068 25.786 15.25H30C30.414 15.25 30.75 15.586 30.75 16ZM28.56 17.75C28.733 17.75 28.871 17.897 28.859 18.07L28.19 28.2C28.08 29.78 27.25 31 25.19 31H18.81C16.75 31 15.92 29.78 15.81 28.2L15.141 18.07C15.13 17.897 15.267 17.75 15.44 17.75H28.56ZM20.75 21C20.75 20.59 20.41 20.25 20 20.25C19.59 20.25 19.25 20.59 19.25 21V26C19.25 26.41 19.59 26.75 20 26.75C20.41 26.75 20.75 26.41 20.75 26V21ZM24.75 21C24.75 20.59 24.41 20.25 24 20.25C23.59 20.25 23.25 20.59 23.25 21V26C23.25 26.41 23.59 26.75 24 26.75C24.41 26.75 24.75 26.41 24.75 26V21Z"
                                fill="#F45E4E"
                            />
                        </svg>
                    ),
            ],
        ]),
    },
];
