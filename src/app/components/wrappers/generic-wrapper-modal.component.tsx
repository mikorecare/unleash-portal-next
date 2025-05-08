"use client";

import { FaCircleCheck } from "react-icons/fa6";

const GenericModalWrapper: React.FC<{
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    close: () => void;
}> = ({ title, children, icon, close }) => {
    return (
        <div className="fixed inset-0 bg-gray-900/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md gap-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                        {icon || (
                            <FaCircleCheck className="text-green-600 text-xl" />
                        )}
                        <p className="text-xl font-semibold">{title}</p>
                    </div>

                    <button
                        onClick={close}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none text-2xl"
                    >
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default GenericModalWrapper;
