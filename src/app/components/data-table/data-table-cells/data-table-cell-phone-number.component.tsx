"use client";

interface IDataTableCellPhoneNumber {
    text: string;
}

const DataTableCellPhoneNumber = ({ text }: IDataTableCellPhoneNumber) => {
    return (
        <p className="font-medium text-[12px] leading-[130%] tracking-[0] text-[#0034B3] font-[Montserrat] text-center">
            {text || "-"}
        </p>
    );
};

export default DataTableCellPhoneNumber;
