import { MdDashboard } from "react-icons/md";
import { BsCartFill, BsCartXFill } from "react-icons/bs";
import { TbReceiptFilled } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";
import { FaBoxes, FaUsers, FaPaw } from "react-icons/fa";
import { SidebarItems } from "./sidebar-item-props.interface";
import { UserRoles } from "@/models/user/user.role.enum";

export const SIDEBAR_ITEMS: SidebarItems[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        route: "/",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN, UserRoles.MERCHANT],
    },
    {
        name: "Product Order",
        icon: BsCartFill,
        route: "/orders/product",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN, UserRoles.MERCHANT],
    },
    {
        name: "Return & Refund Order",
        icon: BsCartXFill,
        route: "/orders/return-refund",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN, UserRoles.MERCHANT],
    },
    {
        name: "Cancellation & Refund",
        icon: RiRefund2Line,
        route: "/orders/cancellation-and-refund",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN, UserRoles.MERCHANT],
    },
    {
        name: "Product Management",
        icon: FaBoxes,
        route: "/management/product",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN],
    },
    {
        name: "Article Management",
        icon: TbReceiptFilled,
        route: "/management/article",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN],
    },
    {
        name: "User Management",
        icon: FaUsers,
        route: "/management/user",
        roles: [UserRoles.SUPER_ADMIN, UserRoles.MARKETING_ADMIN],
    },
    {
        name: "Pet Breed Management",
        icon: FaPaw,
        route: "/management/pet-breed",
        roles: [UserRoles.SUPER_ADMIN],
    },
];