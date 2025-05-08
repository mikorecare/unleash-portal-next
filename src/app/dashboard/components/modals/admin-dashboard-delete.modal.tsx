"use client";

import { useDeleteMerchantByAdminMutation } from "@/hooks/dashboard.hooks";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminDashboardDeleteModal = ({
    id,
    close,
}: {
    id: string;
    close: () => void;
}) => {
    const { mutate, data } = useDeleteMerchantByAdminMutation(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.error(error);
        }
    );

    const token = useSelector((state: RootState) => state.Auth.token);

    useEffect(() => {
        if (!token) return;
        mutate({ merchantId: id, token });
        console.log(data);
    }, [token]);

    return (
        <>
            <span className="font-montserrat font-medium text-[14px] leading-[125%] tracking-[0%] text-[#6E6F78] my-4">
                If you delete this store all the date will be deleted.
            </span>
            <span className="font-montserrat font-medium text-[14px] leading-[125%] tracking-[0%] text-[#6E6F78] my-4">
                Are you sure you want to proceed?
            </span>
            <div className="flex justify-end gap-2 mt-4">
                <button
                    onClick={close}
                    className="w-[99px] h-[44px] bg-[#EEEEEF] rounded-[5px] text-gray-700 text-center text-middle cursor-pointer"
                >
                    Cancel
                </button>
                <button className="w-[99px] h-[44px] bg-[#F45E4E] rounded-[5px] text-white cursor-pointer">
                    Delete
                </button>
            </div>
        </>
    );
};

export default AdminDashboardDeleteModal;
