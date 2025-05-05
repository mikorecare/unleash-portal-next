"use client";

interface IDataTableCellOrderStatus {
    status: string;
}

const DataTableCellOrderStatus = ({ status }: IDataTableCellOrderStatus) => {
    const statusClasses = new Map<string, string>([
        ["CONFIRMED", "bg-blue-50 bg-opacity-50 text-blue-500 border-blue-500"],
        [
            "PENDING",
            "bg-yellow-50 bg-opacity-50 text-yellow-500 border-yellow-500",
        ],
        [
            "COMPLETED",
            "bg-green-50 bg-opacity-50 text-green-500 border-green-500",
        ],
        [
            "READY_FOR_PICKUP",
            "bg-blue-50 bg-opacity-50 text-blue-500 border-blue-500",
        ],
        [
            "FOR_DELIVERY",
            "bg-indigo-50 bg-opacity-50 text-orange-500 border-orange-500",
        ],
        ["DELIVERED", "bg-teal-50 bg-opacity-50 text-teal-500 border-teal-500"],
    ]);

    const statusText = new Map<string, string>([
        ["CONFIRMED", "Confirmed"],
        ["PENDING", "Pending"],
        ["COMPLETED", "Completed"],
        ["READY_FOR_PICKUP", "Ready For Pickup"],
        ["FOR_DELIVERY", "For Delivery"],
        ["DELIVERED", "Delivered"],
    ]);

    const getStatusText = (status: string) =>
        statusText.get(status.toUpperCase()) || "No Data";

    const getStatusClass = (status: string) =>
        statusClasses.get(status.toUpperCase()) ||
        "bg-gray-50 bg-opacity-50 text-gray-400";

    return (
        <div className="flex items-center justify-center">
            <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs capitalize font-medium border ${getStatusClass(
                    status
                )}`}
            >
                {getStatusText(status)}
            </span>
        </div>
    );
};

export default DataTableCellOrderStatus;
