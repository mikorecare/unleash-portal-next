"use client";

import { RootState } from "@/store/store";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector } from "react-redux";

const StoreProfileHeader = ({
    title,
    previousPage,
}: {
    title: string;
    previousPage: string;
}) => {
    const role = useSelector((state: RootState) => state.Auth.role) || "";

    return (
        <div className="flex flex-col gap-4">
            <Link href={`/${role}`} passHref>
                <div className="flex flex-row gap-2 cursor-pointer">
                    <ArrowLeftIcon className="w-4 h-4 text-[#0B0B13]" />
                    <span className="font-medium text-[14px] leading-[125%] tracking-[0%] text-[#6D6D71] font-montserrat">
                        Back to {previousPage}
                    </span>
                </div>
            </Link>

            <span className="font-semibold text-[28px] leading-[110%] tracking-[0%] text-[#0B0B13] font-montserrat">
                {title}
            </span>
        </div>
    );
};

export default StoreProfileHeader;
