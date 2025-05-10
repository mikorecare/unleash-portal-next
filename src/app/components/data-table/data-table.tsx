"use client";

import { useRef, useEffect } from "react";

import "../component.index.scss";
import { Column, DataTableProps } from "./data-table.interface";
import {
    DataTableCellAction,
    DataTableCellButton,
    DataTableCellCurrency,
    DataTableCellDate,
    DataTableCellDefault,
    DataTableCellImage,
    DataTableCellNumeric,
    DataTableCellPaymentStatus,
    DataTableCellOrderStatus,
    DataTableCellPhoneNumber,
    DataTableCellMerchantStatus,
} from "./data-table-cells";
import DataTableLoader from "./data-table-loaders/data-table.loader.component";

const DataTable = <T,>({
    columns,
    data,
    isLoading,
    children,
    width
}: DataTableProps<T>) => {
    // Refs for synchronized scrolling
    const headerRef = useRef<HTMLDivElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    // Set up synchronized scrolling between header and body
    useEffect(() => {
        const handleBodyScroll = () => {
            if (headerRef.current && bodyRef.current) {
                headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
            }
        };

        const bodyElement = bodyRef.current;
        if (bodyElement) {
            bodyElement.addEventListener("scroll", handleBodyScroll);
            return () => {
                bodyElement.removeEventListener("scroll", handleBodyScroll);
            };
        }
    }, []);

    // Render cell content based on column type
    const renderCellContent = (item: T, column: Column<T>): React.ReactNode => {
        const value = column.accessor
            ? column.accessor(item)
            : item[column.key!];

        switch (column.type) {
            case "image": {
                const src = value || "https://via.placeholder.com/40";
                const merchant = item[column.key as keyof T] as {
                    shopName?: string;
                };
                const shopName = merchant?.shopName || "Shop";

                return <DataTableCellImage src={src} shopName={shopName} />;
            }

            case "date":
                return <DataTableCellDate date={String(value)} />;
            case "number":
                return <DataTableCellNumeric number={String(value)} />;
            case "payment-status":
                return <DataTableCellPaymentStatus status={String(value)} />;
            case "button":
                return <DataTableCellButton column={column} item={item} />;
            case "action":
                return (
                    <DataTableCellAction
                        id={String(value)}
                        actions={column.actions}
                    />
                );
            case "currency":
                return <DataTableCellCurrency amount={String(value)} />;
            case "order-status":
                return <DataTableCellOrderStatus status={String(value)} />;
            case "phone-number":
                return <DataTableCellPhoneNumber text={String(value)} />;
            case "merchant-status":
                return <DataTableCellMerchantStatus status={String(value)} />;
            default:
                return <DataTableCellDefault text={String(value)} />;
        }
    };

    return (
        <>
            <DataTableLoader isLoading={isLoading} />
            {!isLoading && (
                <div className="mx-auto max-w-full">
                    <div className="bg-[#F9F9F9] rounded-xl shadow-md">
                        <div className="overflow-x-auto">
                            <table
                                className={`${width || "min-w-full"} divide-y divide-gray-200 bg-white table-fixed font-montserrat`}
                            >
                                {/* RENDER THE TABLE HEADER HERE */}
                                {children}

                                <tbody className="divide-y divide-gray-100">
                                    {data.map((item) => (
                                        <tr
                                            key={`${
                                                (item as any).id
                                            }-${Math.random()}`}
                                            className="hover:bg-gray-50"
                                        >
                                            {columns.map((column, index) => (
                                                <td
                                                    key={index}
                                                    className="px-4 py-3 text-xs font-medium text-gray-900"
                                                >
                                                    {renderCellContent(
                                                        item,
                                                        column
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DataTable;
