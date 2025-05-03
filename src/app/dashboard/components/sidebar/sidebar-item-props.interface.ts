import { UserRoles } from "@/models/user/user.role.enum";
import { IconType } from "react-icons";

export interface SidebarItemProps {
    currentLocation: string;
    icon: React.ReactElement;
    name: string;
    route: string;
    open: boolean;
}

export interface SidebarItems {
    name: string;
    icon: IconType;
    route: string;
    roles: UserRoles[];
}