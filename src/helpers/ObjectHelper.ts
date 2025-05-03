export class ObjectHelper {
    public static filterQuery(queryParams: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(queryParams).filter(([_, value]) => value !== "")
        );
    }
}

