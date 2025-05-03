import { IOwner } from "./owner.interface";
import { IPickupLocation } from "../location/pickup-location.interface";

export interface IMerchant {
    id: string;
    name: string;
    phoneNumberPrefix: string;
    phoneNumber: string;
    email: string;
    description: string;
    location: string;
    profilePicture: string;
    profileBanner: string;
    deliveryFeePerArea: any[];
    status: string;
    owner: IOwner;
    totalOfSales: number;
    totalOfProducts: number;
    pickupLocations: IPickupLocation[];
}