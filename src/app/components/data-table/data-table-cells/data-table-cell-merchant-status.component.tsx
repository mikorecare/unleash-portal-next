"use client";

interface IDataTableCellMerchantStatus {
    status: string;
}

const DataTableCellMerchantStatus = ({
    status,
}: IDataTableCellMerchantStatus) => {
    const statusClasses = new Map<string, string>([
        ["ACTIVE", "bg-green-50 bg-opacity-10 text-green-400"],
        ["INACTIVE", "bg-red-50 bg-opacity-10 text-red-400"],
    ]);

    const statusText = new Map<string, string>([
        ["ACTIVE", "Active"],
        ["INACTIVE", "Inactive"],
    ]);

    const getStatusText = (status: string) =>
        statusText.get(status.toUpperCase()) || "No Data";

    const getStatusClass = (status: string) =>
        statusClasses.get(status.toUpperCase()) ||
        "bg-gray-50 bg-opacity-50 text-gray-400";
    return (
        <div className="flex items-center justify-center">
            <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs capitalize font-medium border ${getStatusClass(
                    status
                )}`}
            >
                <span className="w-2 h-2 rounded-full bg-current" />
                {getStatusText(status)}
            </span>
        </div>
    );
};

export default DataTableCellMerchantStatus;
