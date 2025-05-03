"use client";

import unleash_logo from "@/assets/unleash_banner.png";
import unleash_icon from "@/assets/unleash_icon.png";
import { IoPaw } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import "../component.index.scss";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { UserRoleFactory } from "@/models/user/user.role.factory.class";
import { UserRoles } from "@/models/user/user.role.enum";
import { SIDEBAR_ITEMS } from "./sidebar.mapper";
import SidebarItem from "./sidebar-item.component";
import Header from "../header/header.component";

const DashBoardSidebar = ({ children }: { children: React.ReactNode }) => {

    const BLACKLIST_LINKS = ["/sign-in", "/sign-up", "/account/forgot-password", "/404", "/403"];
    const pathname = usePathname();
    const [open, setOpen] = useState(true);

    const profileData: Record<string, any> = {
        username: "Tate",
        pfp: ""
    }

    const logout = () => {
        // Implement logout logic here
    };

    if (BLACKLIST_LINKS.includes(pathname)) {
        return <>{/* Render children or other content here */}</>;
    }

    return (
        <div className="flex h-[100vh] bg-website-color justify-center items-center">
            <div className={`transition-all duration-300 z-10 bg-website-light h-[95.75%] ml-5 shadow-sm flex flex-col pb-4 rounded-lg`}>
                {/* Dashboard Header */}
                <div className="flex flex-row items-center mx-8 gap-16 my-8">
                    <div className={`flex flex-row gap-1 flex-1`}>
                        <img
                            src={open ? unleash_logo.src : unleash_icon.src}
                            alt="Unleash Logo"
                            className={`transition-all select-none duration-100 h-10`}
                            onClick={() => setOpen(true)}
                        />
                        <div
                            className={`px-2 py-1 rounded-full bg-unleash-blue mt-auto h-fit justify-center items-center flex ${
                                open ? "" : "hidden"
                            }`}
                        >
                            <p className="text-[10px] font-montserrat text-white font-medium">
                                {UserRoleFactory.ROLES_CONFIGS[UserRoles.SUPER_ADMIN]?.tag.name}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex justify-center items-center cursor-pointer ${open ? "h-full w-7" : "hidden"}`}
                        onClick={() => setOpen(false)}
                    >
                        <IoMenu className="w-6 h-6 text-website-gray" />
                    </div>
                </div>

                <div className="h-0.5 w-full bg-website-gray-300"></div>

                {/* Sidebar Items */}
                <div className={`flex flex-col items-center mt-8 flex-1`}>
                    {SIDEBAR_ITEMS.filter((item) => item.roles.includes(UserRoles.SUPER_ADMIN)).map((item, index) => (
                        <SidebarItem
                            key={index}
                            currentLocation={pathname}
                            icon={<item.icon />}
                            name={item.name}
                            route={item.route}
                            open={open}
                        />
                    ))}
                </div>

                <div
                    className={`flex flex-row transition-all duration-200 font-montserrat mb-4 text-sm font-medium select-none text-website-gray-400 rounded-lg cursor-pointer items-center bg-website-light hover:brightness-95
                            ${open ? "opacity-[.68] mx-3 p-5 " : "opacity-100 mx-auto p-3"}`}
                    onClick={logout}
                >
                    <PiSignOutBold className={`${open ? "w-5 h-5" : "w-7 h-7"}`} />
                    <p
                        className={`text-sm transition-all duration-100 ease-in-out ${
                            open ? "w-full ms-4" : "w-0 text-nowrap overflow-hidden"
                        }`}
                    >
                        Logout
                    </p>
                </div>

                <IoPaw
                    className={`absolute opacity-[.18] text-website-gray-400 -rotate-[23.21deg] w-8 h-auto bottom-5 right-5 z-10 ${
                        open ? "" : "hidden"
                    }`}
                />
            </div>

            <div className={`flex-1 h-[95.75%] px-6 overflow-y-scroll duration-150 ease-in-out`}>
                <Header title={UserRoleFactory.ROLES_CONFIGS[UserRoles.SUPER_ADMIN]?.header} profileData={profileData} />
                    {children}
            </div>
        </div>
    );
}

export default DashBoardSidebar;