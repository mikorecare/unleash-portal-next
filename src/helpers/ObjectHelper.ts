export class ObjectHelper {
    public static filterQuery(queryParams: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(queryParams).filter(([_, value]) => value !== "")
        );
    }

    public static capitalizeFirstLetter = (str: string) => {
        if (typeof str !== 'string' || str.length === 0) {
          return str;
        }
      
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
}

