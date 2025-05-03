import { useEffect, useState } from "react";

import { FaCalendarAlt } from "react-icons/fa";

import ProfileButton from "./profile-button.component";
import { DateTimeHelper } from "@/helpers/DateTimeHelper";

interface HeaderProps {
    title: string;
    profileData: Record<string, any>;
}

export default function Header({ title, profileData }: HeaderProps) {

    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => setTime(DateTimeHelper.currentTime());

        // Initial update
        updateTime();

        // Calculate delay until next full minute
        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        // This timeout starts the interval at the next full minute
        const timeout = setTimeout(() => {
        const intervalRef = { current: null as NodeJS.Timeout | null };
            intervalRef.current = setInterval(updateTime, 60 * 1000);
        }, delay);

        // Store interval so we can clear it later
        const intervalRef = { current: null };

        // Cleanup both timeout and interval
        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);



    return (
        <div className="flex flex-row justify-center pt-2 pb-4">
            <div className="flex flex-col flex-1">
                <p className="font-montserrat text-black text-xl">{title}</p>
                <div className="flex flex-row gap-2">
                    <FaCalendarAlt className="text-unleash-blue text-sm" />
                    <p className="font-montserrat text-xs font-semibold text-unleash-blue">{time}</p>
                </div>
            </div>
            <ProfileButton profileData={profileData} />
        </div>
    );
}

