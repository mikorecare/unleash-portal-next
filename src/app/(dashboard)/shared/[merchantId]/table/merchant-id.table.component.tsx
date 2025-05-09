"use client";

import DataTable from "@/app/components/data-table/data-table";
import DataTableHeaderDefault from "@/app/components/data-table/data-table-headers/data-table-header-default.component";
import { merchatIdColumn } from "./merchant-id-table.column";
import { Category } from "@/models/dashboard/dashboard-analytics.interface";
import WrapperNoPaddingGray from "@/app/components/wrappers/wrapper-no-padding-gray.component";
import SearchInput from "@/app/components/input/search-input.component";

const MerchantDetailCategoryTable = ({
    category,
}: {
    category: Category[];
}) => {
    const handleDebounce = (value: string) => {
        console.log(value);
    };

    return (
        <>
            <WrapperNoPaddingGray flex={"col"}>
                <div className="flex flex-row justify-between p-4 ">
                    <p className="font-montserrat font-semibold text-base leading-[120%] tracking-[0] pt-4">
                        Shop List
                    </p>
                    <SearchInput onDebouncedChange={handleDebounce} />
                </div>
                <DataTable
                    columns={merchatIdColumn}
                    data={category || []}
                    isLoading={false}
                    width="w-full"
                >
                    <DataTableHeaderDefault columns={merchatIdColumn} />
                </DataTable>
            </WrapperNoPaddingGray>
        </>
    );
};

export default MerchantDetailCategoryTable;
