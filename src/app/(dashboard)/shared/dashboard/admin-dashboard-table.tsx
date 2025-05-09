"use client";

import DataTable from "@/app/components/data-table/data-table";
import DataTableHeaderDefault from "@/app/components/data-table/data-table-headers/data-table-header-default.component";
import GenericWrapperFullWidth from "@/app/components/wrappers/generic-wrapper-full-width.component";
import TableFilter from "@/app/components/filter/table-filter.component";
import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import TablePaginator from "@/app/components/paginator/table-paginator.component";
import { useGetAllMerchantsMutation } from "@/hooks/dashboard/admin-dashboard.hooks";
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
        status: undefined,
    });

    const { mutate, data, isPending, isError, error } =
        useGetAllMerchantsMutation();

    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        mutate({ queryParams, token });
    }, [
        queryParams.keyword,
        queryParams.dateFrom,
        queryParams.dateTo,
        queryParams.status,
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
                    pageHeader={"Shop List"}
                    count={data?.count || 0}
                    isExpandable={true}
                    onSearchTermChange={(value) => handleSearch(value)}
                    onFilterByChange={(value) => {
                        handleFilter(value);
                    }}
                    statusFilters={"status"}
                />
            </GenericWrapperFullWidth>
            <GenericWrapperFullWidth flex={"col"}>
                <DataTable
                    columns={adminColumns}
                    data={data?.list || []}
                    isLoading={isPending}
                    width="w-full"
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
            </GenericWrapperFullWidth>
        </>
    );
};

export default AdminDashboardTable;
