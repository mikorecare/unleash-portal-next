export interface IDashboardAnalytics {
    totalCompletedOrders: number;
    totalProcessShipment: number;
    totalPendingReturnAndRefund: number;
    pendingOrders: number;
    processedShipment: number;
    totalCancelOrder: number;
    totalRevenue: number;
    totalSoldOutProducts: number;
    totalShopRegistered: number;
    totalSales: number;
    list: Category[];
}

export interface Category {
    name: "Products" | "Rewards" | "Services";
    total: number;
}
