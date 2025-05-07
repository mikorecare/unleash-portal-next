export interface IDashboardAnalytics<T> {
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
    list: T[];
}
