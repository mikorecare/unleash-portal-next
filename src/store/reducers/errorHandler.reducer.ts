import { ErrorHandlerProps } from "@/app/components/error-handler/error-handler.interface";

const initialState: ErrorHandlerProps = {
    signInErrorStatus: false,
    title: "",
    subtitle: "",
};

export const errorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_ERROR":
            return {
                ...state,
                ...action.payload,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                signInErrorStatus: false,
                title: "",
                subtitle: "",
            };
        default:
            return state;
    }
};

export const clearError = () => ({
    type: "CLEAR_ERROR",
});

export const setErrorAndClearAfterTimeout = (error: any) => (dispatch: any) => {
    const title = error?.response?.data?.message || "An Error Occurred";
    const subtitle = error?.response?.data?.detail || "Something went wrong. Please try again.";

    dispatch({
        type: "SET_ERROR",
        payload: { title, subtitle, signInErrorStatus: true },
    });

    setTimeout(() => {
        dispatch(clearError());
    }, 2500);
};
