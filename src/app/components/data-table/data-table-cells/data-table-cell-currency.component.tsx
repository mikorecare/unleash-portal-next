"use client";

interface IDataTableCellCurrency {
    amount: string | number;
}

const DataTableCellCurrency = ({ amount }: IDataTableCellCurrency) => {
    const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(amount));

    return <div>{formatted}</div>;
};

export default DataTableCellCurrency;
