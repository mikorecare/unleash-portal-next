"use client";

import { DataTableCellMerchantStatus } from "@/app/components/data-table/data-table-cells";
import { IMerchant } from "@/models/merchant/merchant.interface";
import parse from "html-react-parser";

const StoreProfile = ({ merchant }: { merchant: IMerchant }) => {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md text-center font-poppins">
            <div className="flex justify-center mb-4">
                <img
                    src={merchant.profilePicture}
                    alt={`${merchant.name} logo`}
                    className="h-16"
                />
            </div>

            <h2 className="text-xl font-bold text-gray-800 font-poppins">
                {merchant.name}
            </h2>
            <p className="text-sm text-gray-500 font-poppins">
                {merchant.email}
            </p>

            <div className="flex justify-center mt-2 font-poppins">
                <DataTableCellMerchantStatus status={merchant.status} />
            </div>

            <div className="mt-4 text-sm text-gray-700 space-y-2 bg-[#EEEEEF] p-3 rounded-2xl">
                <div className="flex justify-start gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 1.6875C5.38125 1.6875 2.4375 4.63125 2.4375 8.25C2.4375 12.0885 5.96024 14.415 8.29124 15.9547L8.688 16.218C8.7825 16.281 8.89125 16.3125 9 16.3125C9.10875 16.3125 9.2175 16.281 9.312 16.218L9.70876 15.9547C12.0398 14.415 15.5625 12.0885 15.5625 8.25C15.5625 4.63125 12.6187 1.6875 9 1.6875ZM9.08925 15.0157L9 15.0751L8.91075 15.0157C6.65325 13.5247 3.5625 11.4832 3.5625 8.25C3.5625 5.2515 6.0015 2.8125 9 2.8125C11.9985 2.8125 14.4375 5.2515 14.4375 8.25C14.4375 11.4832 11.346 13.5255 9.08925 15.0157ZM9 5.8125C7.656 5.8125 6.5625 6.906 6.5625 8.25C6.5625 9.594 7.656 10.6875 9 10.6875C10.344 10.6875 11.4375 9.594 11.4375 8.25C11.4375 6.906 10.344 5.8125 9 5.8125ZM9 9.5625C8.27625 9.5625 7.6875 8.97375 7.6875 8.25C7.6875 7.52625 8.27625 6.9375 9 6.9375C9.72375 6.9375 10.3125 7.52625 10.3125 8.25C10.3125 8.97375 9.72375 9.5625 9 9.5625Z"
                            fill="#25314C"
                        />
                    </svg>
                    <span>{merchant.location}</span>
                </div>
                <div className="flex justify-start gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.4141 16.3141C12.0699 16.3141 11.7234 16.2676 11.3814 16.1738C6.75764 14.9048 3.09688 11.2463 1.82713 6.62557C1.53838 5.57482 1.69659 4.47981 2.27409 3.54381C2.85384 2.60331 3.80714 1.93956 4.88939 1.72356C5.60939 1.57956 6.32114 1.90056 6.68639 2.51631L7.85863 4.4963C8.42788 5.4578 8.14503 6.69605 7.21428 7.31555L6.36613 7.87956C7.15888 9.50706 8.49227 10.8443 10.113 11.6363L10.6847 10.7835C11.3079 9.8543 12.5461 9.57606 13.5069 10.1483L15.4892 11.3303C16.1027 11.6963 16.4199 12.4126 16.2804 13.1116C16.0644 14.1938 15.4006 15.1471 14.4609 15.7268C13.8294 16.1153 13.1266 16.3141 12.4141 16.3141ZM5.23363 2.81256C5.19688 2.81256 5.1594 2.81632 5.1234 2.82382C4.3329 2.98207 3.64815 3.4583 3.23265 4.13405C2.8209 4.80155 2.70763 5.58081 2.91313 6.32706C4.07788 10.5668 7.43712 13.9246 11.6791 15.0886C12.4261 15.2933 13.203 15.1793 13.8698 14.7683C14.5448 14.3521 15.0219 13.6666 15.1772 12.8896C15.2237 12.6563 15.1179 12.4171 14.9124 12.2948L12.9308 11.1128C12.4846 10.8473 11.9086 10.9771 11.6191 11.4083L10.7828 12.6571C10.6328 12.8806 10.3434 12.9661 10.0989 12.8626C7.87667 11.9333 6.06841 10.1213 5.13841 7.8908C5.03491 7.6418 5.1218 7.35531 5.34605 7.20606L6.5919 6.3773C7.0239 6.09005 7.15511 5.5148 6.89036 5.06855L5.71812 3.0893C5.61537 2.9153 5.42938 2.81256 5.23363 2.81256Z"
                            fill="#25314C"
                        />
                    </svg>

                    <span>
                        ({merchant.phoneNumberPrefix}) {merchant.phoneNumber}
                    </span>
                </div>
                <div className="flex justify-start gap-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 15.3126H3.5C1.6865 15.3126 0.6875 14.3136 0.6875 12.5001V6.29914C0.6875 5.48239 1.09327 4.72414 1.77277 4.27114L6.43994 1.16015C7.38794 0.528648 8.61206 0.528648 9.56006 1.16015L14.2272 4.27114C14.9067 4.72414 15.3125 5.48239 15.3125 6.29914V12.5001C15.3125 14.3136 14.3135 15.3126 12.5 15.3126ZM8 1.81189C7.67375 1.81189 7.34821 1.9064 7.06396 2.09615L2.39679 5.20715C2.03079 5.4509 1.8125 5.85964 1.8125 6.29914V12.5001C1.8125 13.6829 2.31725 14.1876 3.5 14.1876H12.5C13.6827 14.1876 14.1875 13.6829 14.1875 12.5001V6.29914C14.1875 5.85964 13.9692 5.4509 13.6032 5.20715L8.93604 2.09615C8.65179 1.9064 8.32625 1.81189 8 1.81189ZM8.6427 10.2051L12.0807 7.70465C12.3319 7.52165 12.3875 7.16989 12.2045 6.91864C12.0222 6.66814 11.6721 6.61115 11.4186 6.7949L7.98132 9.29464C7.93182 9.33064 7.86729 9.33065 7.81854 9.2954L4.38055 6.7949C4.1278 6.6119 3.77598 6.66814 3.59448 6.91864C3.41148 7.16989 3.46701 7.52165 3.71826 7.70465L7.15625 10.2051C7.37825 10.3664 7.63849 10.4474 7.89874 10.4474C8.15974 10.4474 8.4207 10.3671 8.6427 10.2051Z"
                            fill="#25314C"
                        />
                    </svg>

                    <span>{merchant.email}</span>
                </div>
            </div>

            <div className="mt-4 bg-gray-100 p-3 rounded-lg text-sm text-gray-700 text-left">
                <strong>Shop Description</strong>
                {parse(merchant.description)}
            </div>

            <div className="mt-4 flex justify-center gap-6">
                <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4v16h16V4H4z"></path>
                    </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 6h18M3 12h18M3 18h18"></path>
                    </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-200 hover:bg-red-200">
                    <svg
                        className="h-5 w-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default StoreProfile;
