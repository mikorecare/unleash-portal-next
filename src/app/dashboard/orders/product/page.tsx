"use client";

import DataTable from "@/app/components/data-table/data-table";
import { useGetAllOrdersByMerchantMutation } from "@/hooks/order.hooks";
import { RootState } from "@/store/store";
import { JSX, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productColums } from "./product-table.column";
import TablePaginator from "@/app/components/paginator/table-paginator.component";
import GenericWrapperFullWidth from "@/app/components/wrappers/generic-wrapper-full-width.component";
import TableFilter from "@/app/components/filter/table-filter.component";
import { ITableFilter } from "@/app/components/filter/table-filter.interface";

import DataTableHeaderDefault from "@/app/components/data-table/data-table-headers/data-table-header-default.component";

const ProductOrderPage = (): JSX.Element => {
    const [queryParams, setQueryParams] = useState<ITableFilter>({
        page: 1,
        limit: 10,
        searchBy: "",
        keyword: "",
        dateTo: "",
        dateFrom: "",
        orderStatus: undefined,
    });

    const { mutate, data, isPending, isError, error } =
        useGetAllOrdersByMerchantMutation();

    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        mutate({ queryParams, token });
    }, [
        queryParams.keyword,
        queryParams.dateFrom,
        queryParams.dateTo,
        queryParams.orderStatus,
        queryParams.page,
        queryParams.limit,
        token,
    ]);

    const handleSearch = (keyword: string) => {
        setQueryParams((prev) => ({
            ...prev,
            searchBy: keyword ? "customerName" : "",
            keyword: keyword,
        }));

        console.log(queryParams);
    };

    const handleFilter = (value: ITableFilter) => {
        setQueryParams((prev) => ({
            ...prev,
            ...value,
        }));
    };

    return (
        <>
            <GenericWrapperFullWidth flex={"col"}>
                <TableFilter
                    pageHeader={"Product Order"}
                    count={data?.count || 0}
                    isExpandable={true}
                    onSearchTermChange={(value) => handleSearch(value)}
                    onFilterByChange={(value) => {
                        handleFilter(value);
                    }}
                    statusFilters={"orderStatus"}
                />
            </GenericWrapperFullWidth>
            <GenericWrapperFullWidth flex={"col"}>
                <DataTable
                    columns={productColums}
                    data={data?.list || []}
                    isLoading={isPending}
                >
                    <DataTableHeaderDefault
                        columns={productColums}
                        onChangeSort={(value: ITableFilter) =>
                            handleFilter(value)
                        }
                    />
                </DataTable>
                <TablePaginator
                    limit={data?.limit || 0}
                    count={data?.count || 0}
                    totalPages={data?.totalPages || 0}
                    page={data?.page || 0}
                    onPageChange={(page) => handleFilter(page)}
                />
            </GenericWrapperFullWidth>
        </>
    );
};

export default ProductOrderPage;
