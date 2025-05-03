"use client";

export class DateTimeHelper {
    public static formatDate(dateString: string | undefined): string {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        });
    }

    public static currentTime(): string {
        const now = new Date();
        const options = { month: 'long', year: 'numeric' };
        const datePart = now.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        const timePart = `${hours}:${minutes} ${ampm}`;

        return `${datePart} | ${timePart}`;
    }
}