"use client";

import DataTable from "@/app/components/data-table/data-table";
import { useGetAllOrdersByMerchantMutation } from "@/hooks/order.hooks";
import { RootState } from "@/store/store";
import { JSX, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { productColums } from "./product-table.column";
import TablePaginator from "@/app/components/paginator/table-paginator.component";
import DataTableWrapper from "@/app/components/data-table/data-table-wrappers/data-table-wrapper.component";
import TableFilter, {
    IFilterBy,
} from "@/app/components/filter/table-filter.component";
import {
    ITableFilter,
    TableCategoryEnum,
    TableOrderStatusEnum,
} from "@/app/components/filter/table-filter.interface";

import DataTableHeaderDefault from "@/app/components/data-table/data-table-headers/data-table-header-default.component";

const ProductOrderPage = (): JSX.Element => {
    const hasFetchedRef = useRef(false);
    const [queryParams, setQueryParams] = useState<ITableFilter>({
        page: 1,
        limit: 40,
        searchBy: "",
        keyword: "",
        dateTo: "",
        dateFrom: "",
        orderStatus: undefined
    });

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

    useEffect(() => {
        if (!token) return;
        mutate({ queryParams, token });
        console.log(queryParams);
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
            <DataTableWrapper>
                <TableFilter
                    pageHeader={"Product Order"}
                    count={data?.count || 0}
                    isExpandable={true}
                    onSearchTermChange={(value) => handleSearch(value)}
                    onFilterByChange={(value) => {
                        handleFilter(value);
                    }}
                />
            </DataTableWrapper>
            <DataTableWrapper>
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
            </DataTableWrapper>
        </>
    );
};

export default ProductOrderPage;
