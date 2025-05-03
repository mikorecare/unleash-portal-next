import { IDeliveryAddress } from "../location/delivery.address.interface";
import { ILocationPickupDetails } from "../location/location.pickup.details.interface";
import { IMerchantMinified } from "../merchant/merchant.minified.interface";
import { IOrderMinified } from "../order/order.minified.interface";
import { OrderStatus } from "../order/order.status.enum";
import { IUserMinified } from "../user/user.minified.interface";
import { IVoucherMinified } from "../voucher/voucher.minified.interface";

enum ProductOrderCategoryType {
    PRODUCTS = "Products",
    SERVICES = "Services"
}

export interface IProductOrder {
    categoryType: ProductOrderCategoryType;
    dateBooked: string | null;
    datePurchased: string;
    deliveryAddress: IDeliveryAddress;
    giftWrapFee: number;
    hasPaymentDiscount: boolean;
    isGiftWrap: boolean;
    latestStatus: OrderStatus;
    locationPickUpDetails?: ILocationPickupDetails;
    merchant: IMerchantMinified;
    orderId: string;
    orderQuantity: number;
    orderStatus: IOrderMinified[];
    paymentAmount: number;
    paymentMethod: string;
    paymentStatus: string;
    paymentVoucher?: IVoucherMinified;
    productName: string;
    products: any[];
    totalPrice: number;
    totalShippingFee: number;
    transactionId: string;
    user: IUserMinified;
  }
  
