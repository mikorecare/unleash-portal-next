"use client";

import { useGetLocationMutation, useSetupLocationMutation } from "@/hooks/dashboard/admin-merchant-dashboard.hooks";
import { ILocationRegion, IslandGroupCode, PickupLocationType } from "@/models/location/pickup-location.interface";
import { LocationFormPayload } from "@/models/payloads/location-form-payload.interface";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const MerchantLocationModal = ({ close, type, onSuccess }: { close: () => void; type: PickupLocationType; onSuccess: (data: any) => void }) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<LocationFormPayload>({
        defaultValues: {
            fullname: "",
            phoneNumber: "",
            street: "",
            city: "",
            barangay: "",
            province: "",
            region: "",
            postalCode: "",
            islandGroupCode: IslandGroupCode.METRO_MANILA,
            isDefaultAddress: false,
            type: type,
        },
    });

    const token = useSelector((state: RootState) => state.Auth.token) || "";
    const region = watch("region");
    const province = watch("province");

    const { mutate: fetchRegions, data: regionData } = useGetLocationMutation<ILocationRegion>((data) =>
        data.sort((a, b) => a.name.localeCompare(b.name))
    );
    const { mutate: fetchProvinces, data: provinceData } = useGetLocationMutation<ILocationRegion>((data) =>
        data.sort((a, b) => a.name.localeCompare(b.name))
    );
    const { mutate: fetchCities, data: cityData } = useGetLocationMutation<ILocationRegion>((data) =>
        data.sort((a, b) => a.name.localeCompare(b.name))
    );
    const { mutate: submitLocationForm, data: submitLocationFormResponse } = useSetupLocationMutation((data, variables) => {
        if (data) {
            onSuccess(variables.data);
        }
    });

    useEffect(() => {
        if (!token) return;
        fetchRegions({ queryParams: { type: "regions", limit: 50 }, token });
    }, [token]);

    useEffect(() => {
        if (!token) return;
        if (!region) {
            setValue("province", "");
            setValue("city", "");
            return;
        }

        if (region) {
            const regionFilter = regionData?.find((data) => data.value === region);
            setValue("islandGroupCode", regionFilter?.islandGroupCode || IslandGroupCode.METRO_MANILA);
            fetchProvinces({ queryParams: { type: "provinces", regionCode: regionFilter?.code, limit: 50 }, token });
            return;
        }
    }, [region]);

    useEffect(() => {
        if (!token) return;
        if (!province) {
            setValue("city", "");
            return;
        }

        const provinceCode = provinceData?.find((data) => data.value === province);

        fetchCities({ queryParams: { type: "city", regionCode: provinceCode?.regionCode, limit: 50 }, token });
    }, [province]);

    const onSubmit = (data: LocationFormPayload) => {
        submitLocationForm({ data, token });
    };

    const inputClassName = "w-[431px] h-[60px] gap-[13px] rounded-[5px] border border-gray-300 px-[12px] py-[18px] text-[#222432]";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" {...register("fullname", { required: "Full name is required" })} className={inputClassName} />
                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" {...register("phoneNumber", { required: "Phone number is required" })} className={inputClassName} />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Building No. House No. Street</label>
                <input type="text" {...register("street", { required: "Street is required" })} className={inputClassName} />
                {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Region</label>
                <select {...register("region", { required: "Region is required" })} className={`${inputClassName} cursor-pointer`}>
                    <option value="">Select an option</option>
                    {regionData &&
                        regionData.map((region) => (
                            <option key={region._id} value={region.value}>
                                {region.name}
                            </option>
                        ))}
                </select>
                {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Province</label>
                <select {...register("province", { required: "Province is required" })} className={`${inputClassName} cursor-pointer`}>
                    <option value="">Select an option</option>
                    {provinceData &&
                        provinceData.map((province) => (
                            <option key={province._id} value={province.value!}>
                                {province.name}
                            </option>
                        ))}
                </select>
                {errors.province && <p className="text-red-500 text-sm">{errors.province.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <select {...register("city", { required: "City is required" })} className={`${inputClassName} cursor-pointer`}>
                    <option value="">Select an option</option>
                    {cityData &&
                        cityData.map((city) => (
                            <option key={city._id} value={city.value!}>
                                {city.name}
                            </option>
                        ))}
                </select>
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Barangay</label>
                <input type="text" {...register("barangay", { required: "Barangay is required" })} className={inputClassName} />
                {errors.barangay && <p className="text-red-500 text-sm">{errors.barangay.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input type="text" {...register("postalCode", { required: "Postal code is required" })} className={inputClassName} />
                {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
            </div>

            <div className="flex items-center">
                <input type="checkbox" {...register("isDefaultAddress")} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-700">Set as default address</label>
            </div>

            <div className="flex flex-row justify-around">
                <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 cursor-pointer"
                    onClick={close}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00AC4F] cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default MerchantLocationModal;
