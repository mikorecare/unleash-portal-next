export enum PickupLocationType {
    PICKUP = "pickup",
    RETURN = "return"
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
    islandGroupCode: string;
    type: PickupLocationType;
}