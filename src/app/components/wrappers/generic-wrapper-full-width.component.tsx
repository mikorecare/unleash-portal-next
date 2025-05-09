"use client";

const GenericWrapperFullWidth = ({ flex, children }: {flex: string, children: React.ReactNode }) => {
  return (
    <div className="container max-w-full bg-webpage-bg">
      <div className={`max-w-full px-4 py-4 bg-white rounded-lg shadow mb-4 flex flex-${flex} gap-2`}>
        {children}
      </div>
    </div>
  );
};

export default GenericWrapperFullWidth;
