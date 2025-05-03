"use client";

import React from "react";
import { SidebarItemProps } from "./sidebar-item-props.interface";
import { useRouter } from "next/navigation";

const SidebarItem = ({ currentLocation, icon, name, route, open }: SidebarItemProps) => {
    const router = useRouter();
    const isActive = currentLocation === route;

    const onClickAction = () => {
        router.push(`dashboard/${route}`);
    };

    return (
        <div
            className={`flex flex-row items-center cursor-pointer rounded-lg hover:brightness-95
                                ${isActive ? "bg-website-color text-unleash-blue" : "bg-website-light text-website-gray "}
                                ${open ? "w-[84.85%] py-4 px-3" : "w-14 h-14"}`}
            onClick={onClickAction}
        >
            {icon && React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6 mx-auto" })}
            <p className={`font-poppins text-sm select-none ${open ? "w-full ms-3" : "hidden"}`}>{name}</p>
        </div>
    );
}

export default SidebarItem;
