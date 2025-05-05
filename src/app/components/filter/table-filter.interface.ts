export enum TableSortEnum {
    ASC = "asc",
    DESC = "desc",
}

export enum TableCategoryEnum {
    DATE = "date", 
    CATEGORY = "category", 
    STATUS = "status"
}

export enum TableOrderStatusEnum {
    CONFIRMED = "confirmed",
    PENDING = "pending",
    COMPLETED = "completed",
    READY_FOR_PICKUP = "ready_for_pickup",
    FOR_DELIVERY = "for_delivery",
    DELIVERED = "delivered"
}

export interface ITableFilter {
    page?: number;
    limit?: number;
    filterBy?: TableCategoryEnum | undefined;
    searchBy?: string;
    keyword?: string;
    orderStatus?: TableOrderStatusEnum | undefined;
    dateFrom?: string;
    dateTo?: string;
    customerName?: TableSortEnum;
    transactionId?: TableSortEnum;
    orderId?: TableSortEnum;
}
