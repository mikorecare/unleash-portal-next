"use client";

import { ILoginTypesProps } from "../login.type";

const AdminForgotPassword = ({ onSwitchForm }: ILoginTypesProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <p className="font-montserrat text-base font-bold mt-2">
          We notified the admin!
        </p>

        <div className="font-montserrat text-xs font-medium text-website-gray">
          We notified the admin for the request of password change. Please
          standby and wait for your new password. Thank you!
        </div>
      </div>

      <div className="w-full h-[1px] bg-website-gray rounded-full"></div>

      <div
        className="w-full cursor-pointer hover:brightness-90 font-montserrat font-medium text-unleash-blue rounded-sm flex justify-center items-center text-sm mt-4"
        onClick={() => onSwitchForm("LOGIN")}
      >
        Go back to Login page
      </div>
    </>
  );
};

export default AdminForgotPassword;
