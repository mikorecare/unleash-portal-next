"use client";

import DataTable from "@/app/components/data-table/data-table";
import DataTableHeaderDefault from "@/app/components/data-table/data-table-headers/data-table-header-default.component";
import DataTableWrapper from "@/app/components/data-table/data-table-wrappers/data-table-wrapper.component";
import TableFilter from "@/app/components/filter/table-filter.component";
import {
    ITableFilter,
    TableAdminMerchantStatusEnum,
} from "@/app/components/filter/table-filter.interface";
import TablePaginator from "@/app/components/paginator/table-paginator.component";
import { useGetAllMerchantsMutation } from "@/hooks/dashboard.hooks";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { adminColumns } from "./admin-dashboard-table.column";

const AdminDashboardTable = () => {
    const [queryParams, setQueryParams] = useState<ITableFilter>({
        page: 1,
        limit: 10,
        searchBy: "",
        keyword: "",
        dateTo: "",
        dateFrom: "",
        productStatus: undefined,
    });

    const { mutate, data, isPending, isError, error } =
        useGetAllMerchantsMutation(
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
        console.log(data);
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
                    pageHeader={"Shop List"}
                    count={data?.count || 0}
                    isExpandable={true}
                    onSearchTermChange={(value) => handleSearch(value)}
                    onFilterByChange={(value) => {
                        handleFilter(value);
                    }}
                    statusFilters={"productStatus"}
                />
            </DataTableWrapper>
            <DataTableWrapper>
                <DataTable
                    columns={adminColumns}
                    data={data?.list || []}
                    isLoading={isPending}
                >
                    <DataTableHeaderDefault
                        columns={adminColumns}
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

export default AdminDashboardTable;
