"use client";

interface IDataTableLoader {
  isLoading: boolean;
}

const DataTableLoader = ({ isLoading }: IDataTableLoader) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black-400 bg-opacity-10 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </>
  );
};

export default DataTableLoader;
