export enum PickupLocationType {
    PICKUP = "pickup",
    RETURN = "return",
}

export enum IslandGroupCode {
    METRO_MANILA = "metro manila",
    LUZON = "luzon",
    VISAYAS = "visayas",
    MINDANAO = "mindanao",
}

export interface ILocationRegion {
    _id: string;
    code: string;
    name: string;
    regionCode: string | null;
    islandGroupCode: IslandGroupCode;
    value: string;
    label: string;
}

export interface IPickupLocation {
    _id: string;
    fullname: string;
    phoneNumber: string;
    street: string;
    city: string;
    barangay: string;
    province: string;
    region: string;
    postalCode: string;
    islandGroupCode: IslandGroupCode;
    type: PickupLocationType;
}
