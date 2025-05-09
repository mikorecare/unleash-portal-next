"use client";

const GenericWrapperProfile = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container max-w-[381px] max-h-[480px] bg-webpage-bg">
            <div className="w-full h-full bg-white rounded-2xl shadow p-4 flex flex-col gap-4">
                {children}
            </div>
        </div>
    );
};

export default GenericWrapperProfile;
