"use client";

import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { FaCircleCheck, FaCircleXmark, FaEye } from "react-icons/fa6";
import { DataTableCellActionEnum } from "../data-table-cell.interface";
import { usePathname, useRouter } from "next/navigation";

interface IDataTableCellAction<T> {
    id: string;
    actions?: Map<DataTableCellActionEnum, (item: string) => string | void>;
}

const DataTableCellAction = <T,>({ id, actions }: IDataTableCellAction<T>) => {
    const router = useRouter();
    const pathname = usePathname();

    const actionIconStatus = new Map<
        keyof typeof DataTableCellActionEnum,
        React.ReactNode
    >([
        ["APPROVED", <FaCircleCheck className="text-green-600 text-xl" />],
        ["CANCELLED", <FaCircleXmark className="text-red-500 text-xl" />],
        ["EDIT", <BiSolidEdit className="text-gray-500 text-xl" />],
        ["DELETE", <BiTrash className="text-gray-500 text-xl" />],
        ["VIEW", <FaEye className="text-blue-500 text-xl" />],
    ]);

    const actionIcon = (status: keyof typeof DataTableCellActionEnum) =>
        actionIconStatus.get(status) || "Error";

    const handleAction = (action: DataTableCellActionEnum) => {
        const routeOrAction = actions?.get(action);
        const basePath = pathname.endsWith("/")
            ? pathname.slice(0, -1)
            : pathname;

        if (routeOrAction) {
            const result = routeOrAction(id);
            if (typeof result === "string") {
                router.push(`${basePath}/${id}`);
            }
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            {Array.from(actions?.entries() || []).map(([action, handler]) => (
                <button
                    key={action}
                    onClick={() => handleAction(action)}
                    title={action.toLowerCase()}
                    className="hover:scale-110 transition-transform cursor-pointer"
                >
                    {actionIcon(action)}
                </button>
            ))}
        </div>
    );
};

export default DataTableCellAction;
