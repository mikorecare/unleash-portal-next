"use client";

const GenericWrapperProfile = ({
    children,
    maxWidthInPx,
    maxHeightInPx,
}: {
    children: React.ReactNode;
    maxWidthInPx: string;
    maxHeightInPx: string;
}) => {
    return (
        <div className="container bg-webpage-bg" style={{ minHeight: maxHeightInPx, maxWidth: maxWidthInPx, maxHeight: maxHeightInPx }}>
            <div className="w-full h-full bg-white rounded-2xl shadow p-4 flex flex-col gap-4">{children}</div>
        </div>
    );
};

export default GenericWrapperProfile;
