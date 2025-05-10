"use client";

import { showGenericModal } from "@/app/components/modal/generic-modal.component";
import WrapperNoPaddingGray from "@/app/components/wrappers/wrapper-no-padding-gray.component";
import { IPickupLocation, IslandGroupCode, PickupLocationType } from "@/models/location/pickup-location.interface";
import { BsChevronDown, BsGeoAltFill, BsPlusCircle } from "react-icons/bs";
import MerchantLocationModal from "../modals/merchant-location.modal";
import { useMemo, useState } from "react";

const titleMap = new Map<PickupLocationType, string>([
    [PickupLocationType.PICKUP, "Pick up Location"],
    [PickupLocationType.RETURN, "Return Location"],
]);

const MerchantDashboardLocationForm = ({ type, data }: { type: PickupLocationType; data: IPickupLocation[] }) => {
    const [locations, setLocations] = useState<IPickupLocation[]>(data);

    const groupedByIsland = useMemo(() => {
        return locations.reduce((acc, item) => {
            acc[item.islandGroupCode] = [...(acc[item.islandGroupCode] || []), item];
            return acc;
        }, {} as Record<IslandGroupCode, IPickupLocation[]>);
    }, [locations]);

    const openModal = async () => {
        showGenericModal(`Set ${titleMap.get(type)}`, (close) => (
            <MerchantLocationModal
                close={close}
                type={type}
                onSuccess={(data: IPickupLocation) => {
                    console.log(data);
                    setLocations((prev) => [...prev, data]);
                    close();
                }}
            />
        ));
    };

    return (
        <WrapperNoPaddingGray flex="col">
            <div className="flex flex-row justify-between p-4 font-montserrat">
                <p className="font-montserrat font-semibold text-base leading-[120%] tracking-[0] pt-4">{titleMap.get(type)}</p>
                <button className="h-auto rounded-2xl bg-[#0034B3] py-2 px-4 flex flex-row justify-between items-center gap-2" onClick={openModal}>
                    <BsPlusCircle className="text-white text-xs" />
                    <span className="text-xs text-white font-montserrat">Set Location</span>
                </button>
            </div>

            <div className="w-full mx-auto text-sm font-medium text-gray-900">
                <div className="border-b border-gray-200">
                    {Object.entries(groupedByIsland)
                        .sort()
                        .map(([islandGroup, locations]) => (
                            <details key={islandGroup} className="group open:bg-gray-50">
                                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer w-full">
                                    <div className="flex items-center gap-2">
                                        <BsGeoAltFill />
                                        <span className="uppercase text-[#222432] font-montserrat">{islandGroup}</span>
                                    </div>
                                    <BsChevronDown />
                                </summary>

                                <div className="px-6 pb-4  font-montserrat">
                                    {locations.sort().map((loc, index) => (
                                        <div key={index}>
                                            <div className="relative border border-gray-400 rounded-xl p-4 mb-3 bg-white shadow-sm">
                                                <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400">Address {index + 1}</div>

                                                <div className="flex justify-between items-center">
                                                    <p className="font-semibold">{loc.city}</p>
                                                    <button className="px-3 py-1 text-xs bg-[#DCDCDE] rounded-md border border-gray-300 hover:bg-gray-200">
                                                        Action ▼
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        ))}
                </div>
            </div>
        </WrapperNoPaddingGray>
    );
};

export default MerchantDashboardLocationForm;
