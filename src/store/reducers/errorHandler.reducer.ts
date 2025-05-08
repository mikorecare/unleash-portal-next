import { ErrorHandlerProps } from "@/app/components/error-handler/error-handler.interface";

const initialState: ErrorHandlerProps = {
    signInErrorStatus: false,
    title: "",
    subtitle: "",
    statusCode: undefined
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
                statusCode: undefined
            };
        default:
            return state;
    }
};

export const clearError = () => ({
    type: "CLEAR_ERROR",
});
