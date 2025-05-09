"use client";

const GridWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container max-w-full bg-webpage-bg mb-4">
            <div className="grid grid-cols-[381px_1fr_381px] gap-4">
                {children}
            </div>
        </div>
    );
};

export default GridWrapper;
