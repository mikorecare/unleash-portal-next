"use client";

const WrapperNoPaddingGray = ({
    flex = "row",
    children,
}: {
    flex?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={`max-w-full bg-[#F9F9F9] rounded-2xl shadow mb-4 flex flex-${flex} gap-2`}
        >
            {children}
        </div>
    );
};

export default WrapperNoPaddingGray;
