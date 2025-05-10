"use client";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { clearError } from "@/store/reducers/errorHandler.reducer";
import { ErrorHandlerProps } from "./error-handler.interface";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { doLogout } from "@/store/slices/auth.slice";
import { redirect } from "next/navigation";

const ErrorHandler = () => {
    const dispatch = useDispatch();
    const {
        signInErrorStatus,
        title,
        subtitle,
        statusCode,
    }: ErrorHandlerProps = useSelector((state: RootState) => state.Error);

    const closeError = () => {
        dispatch(clearError());
    };

    useEffect(() => {
        if (signInErrorStatus) {
            const timeoutId = setTimeout(() => {
                dispatch(clearError());
            }, 2500);

            if (statusCode === 401 || statusCode === 403) {
                // dispatch(doLogout());
                
                // setTimeout(() => {
                //     redirect("/login");
                // }, 2500);
            }

            return () => clearTimeout(timeoutId);
        }
    }, [signInErrorStatus, statusCode, dispatch]);

    return (
        <div
            className={`absolute flex flex-row z-20 justify-center items-center gap-6 top-20 left-1/2 -translate-x-1/2 py-4 px-4 rounded-2xl border-[1px] border-website-red-light w-md bg-website-light
            ${signInErrorStatus ? "animate-float-in" : "hidden"}`}
        >
            <IoIosCloseCircle className="w-10 h-10 text-website-red " />
            <div className="flex flex-col flex-1 font-montserrat">
                <p className="font-semibold text-base text-black">{title}</p>
                <p className="font-medium text-xs text-website-gray">
                    {subtitle}
                </p>
            </div>
            <IoCloseOutline
                className="w-10 h-10 text-website-gray p-2"
                onClick={closeError}
            />
        </div>
    );
};

export default ErrorHandler;
