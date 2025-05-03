"use client";

import DataTable from "@/app/components/data-table/data-table";
import { useGetAllOrdersByMerchantMutation } from "@/hooks/order.hooks";
import { RootState } from "@/store/store";
import { JSX, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { productColums } from "./product-table.column";
import TablePaginator from "@/app/components/paginator/table-paginator.component";
import DataTableWrapper from "@/app/components/data-table/data-table-wrappers/data-table-wrapper.component";
import TableFilter from "@/app/components/filter/table-filter.component";

const ProductOrderPage = (): JSX.Element => {
    const hasFetchedRef = useRef(false);
    const { mutate, data, isPending, isError, error } =
        useGetAllOrdersByMerchantMutation(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.error(error);
            }
        );
    const token = useSelector((state: RootState) => state.Auth.token);

    const queryParams = {
        page: 1,
        limit: 40,
        orderStatus:
            "confirmed,pending,completed,ready_for_pickup,for_delivery,delivered",
    };

    useEffect(() => {
        if (!token) return;
        mutate({ queryParams, token });
    }, [token]);

    return (
        <>
            <DataTableWrapper>
                <TableFilter
                    pageHeader={"Product Order"}
                    count={data?.count || 0}
                    isExpandable={true}
                />
            </DataTableWrapper>
            <DataTableWrapper>
                <DataTable
                    columns={productColums}
                    data={data?.list || []}
                    isLoading={isPending}
                />
                <TablePaginator
                    limit={data?.limit || 0}
                    count={data?.count || 0}
                    totalPages={data?.totalPages || 0}
                    page={data?.page || 0}
                    onPageChange={function (page: number): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </DataTableWrapper>
        </>
    );
};

export default ProductOrderPage;
