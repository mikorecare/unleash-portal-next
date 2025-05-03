"use client";

interface IDataTableCellImage {
    src: string;
    shopName: string;
}

const DataTableCellImage = (data: IDataTableCellImage) => {

  const shopName = data.shopName || "Shop";

  return (
    <div className="flex items-center justify-center">
    <img
      title={shopName}
      src={
        data.src ||
        "https://via.placeholder.com/40"
      }
      alt={shopName}
      className="h-8 w-8 rounded-full"
    />
  </div>
  )
}

export default DataTableCellImage