import { UserRoles } from "@/models/user/user.role.enum";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthSlice {
    token: string | null;
    role: UserRoles | "merchant" | "admin" | "marketing" | "visitor";
    isAuthenticated: boolean;
    name: string;
    email: string;
    type: string;
    userInfo: any;
    isProfileFinish: boolean;
    id: string;

    signupEmail: string;
    signupUserId: string;
}

const initialState: AuthSlice = {
    token: null,
    role: "visitor",
    isAuthenticated: false,
    id: "",
    name: "",
    email: "",
    type: "",
    userInfo: null,
    isProfileFinish: false,

    signupEmail: "",
    signupUserId: "",
};

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        doSetAuthLogin: (state, { payload }) => {
            state.token = payload.tokens.access;
            state.role = payload.role;
            state.name = payload.name;
            state.email = payload.email;
            state.id = payload.id;
            state.isAuthenticated = true;
        },
        doSetUserInfo: (state, { payload }) => {
            state.userInfo = payload;
        },
        doSetFinishProfile: (state, { payload }) => {
            state.isProfileFinish = payload.isProfileFinish;
        },
        doLogout: (state) => {
            state.token = null;
            state.id = "";
            state.role = "visitor";
            state.isAuthenticated = false;
            state.name = "";
            state.email = "";
            state.type = "";
            state.userInfo = null;
            state.isProfileFinish = false;
            state.signupEmail = "";
            state.signupUserId = "";
        },

        doSetSignupInfo: (state, { payload }) => {
            state.signupEmail = payload.email;
            state.signupUserId = payload.userId;
        },
        doClearSignupInfo: (state) => {
            state.signupEmail = "";
            state.signupUserId = "";
        },
    },
});

export const { actions: authActions, reducer: authReducer } = authSlice;

export const {
    doSetAuthLogin,
    doSetUserInfo,
    doSetFinishProfile,
    doLogout,

    doSetSignupInfo,
    doClearSignupInfo,
} = authActions;

export default authSlice;
