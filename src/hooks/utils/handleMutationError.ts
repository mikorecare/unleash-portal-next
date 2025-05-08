import { doLogout } from "@/store/slices/auth.slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const UNAUTHORIZED_STATUSES = [401, 403];

export const handleMutationError = (error: any) => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.Auth.token);
    console.log(error);
    const status = error?.response?.status;
    const message =
        error?.response?.data?.m ||
        error?.response?.data?.message ||
        "Something went wrong. Please try again or reload the page.";

    if (UNAUTHORIZED_STATUSES.includes(status) && token !== undefined) {
        console.log(message);
        dispatch(doLogout());
    } else {
        console.log(message);
    }
};
