export interface IGenericCollection<T> {
    list: T[];
    count: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: number;
    totalPages: number;
}