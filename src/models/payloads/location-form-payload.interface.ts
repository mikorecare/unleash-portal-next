import { IslandGroupCode, PickupLocationType } from "../location/pickup-location.interface";

export interface LocationFormPayload {
    fullname: string;
    phoneNumber: string;
    street: string;
    city: string;
    barangay: string;
    province: string;
    region: string;
    postalCode: string;
    islandGroupCode: IslandGroupCode;
    isDefaultAddress: boolean;
    type: PickupLocationType
}
