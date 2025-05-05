"use client";

import { BiSolidEdit } from "react-icons/bi";
import { FaCircleCheck, FaCircleXmark, FaEye } from "react-icons/fa6";
import { DataTableCellActionEnum } from "../data-table-cell.interface";

interface IDataTableCellAction<T> {
    id: string;
    actions?: DataTableCellActionEnum[];
}

const DataTableCellAction = <T,>({ id, actions }: IDataTableCellAction<T>) => {
    const actionIconStatus = new Map<keyof typeof DataTableCellActionEnum, React.ReactNode>([
        ["APPROVED", <FaCircleCheck className="text-green-600 text-xl" />],
        ["CANCELLED", <FaCircleXmark className="text-red-500 text-xl" />],
        ["EDIT", <BiSolidEdit className="text-gray-500 text-xl" />],
        ["VIEW", <FaEye className="text-blue-500 text-xl" />],
    ]);

    const actionIcon = (status: keyof typeof DataTableCellActionEnum) =>
        actionIconStatus.get(status) || (
            "Error"
        );

    return (
        <div className="flex items-center justify-center space-x-2">
            {actions?.map((action) => (
                <button
                    key={action}
                    onClick={() =>
                        console.log(`${action} clicked for ID: ${id}`)
                    }
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
