import { UserRoles } from "./user.role.enum";

interface RoleConfig {
    header: string;
    tag: {
        name: string;
    };
}

class UserRoleFactory {
    private static createRoleConfig(name: string, header: string): RoleConfig {
        return {
            header,
            tag: {
                name,
            },
        };
    }

    static USER_ROLES = {
        SUPER_ADMIN: "SUPER_ADMIN",
        MARKETING_ADMIN: "MARKETING_ADMIN",
        MERCHANT: "MERCHANT",
        VISITOR: "VISITOR",
    };

    static ALL = Object.values(UserRoleFactory.USER_ROLES);
    static ALL_AUTHORIZED = [
        UserRoleFactory.USER_ROLES.SUPER_ADMIN,
        UserRoleFactory.USER_ROLES.MARKETING_ADMIN,
        UserRoleFactory.USER_ROLES.MERCHANT,
    ];
    static ALL_ADMINS = [
        UserRoleFactory.USER_ROLES.SUPER_ADMIN,
        UserRoleFactory.USER_ROLES.MARKETING_ADMIN,
    ];

    static ROLES_CONFIGS: Record<UserRoles, RoleConfig> = {
        [UserRoles.SUPER_ADMIN]: UserRoleFactory.createRoleConfig(
            "Super Admin",
            "Admin Portal"
        ),
        [UserRoles.MARKETING_ADMIN]: UserRoleFactory.createRoleConfig(
            "Marketing Admin",
            "Marketing Admin Portal"
        ),
        [UserRoles.MERCHANT]: UserRoleFactory.createRoleConfig(
            "Merchant",
            "Merchant Centre"
        ),
        [UserRoles.VISITOR]: UserRoleFactory.createRoleConfig(
            "Visitor",
            "---"
        ),
    };
}

export { UserRoleFactory };
