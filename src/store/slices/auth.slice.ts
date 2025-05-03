import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  token: string | null;
  role: string;
  isAuthenticated: boolean;
  name: string;
  email: string;
  type: string;
  userInfo: any;
  isProfileFinish: boolean;

  signupEmail: string;
  signupUserId: string;
}

const initialState: Auth = {
  token: null,
  role: "",
  isAuthenticated: false,
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
      state.role = "";
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

export const { 
  actions: authActions, 
  reducer: authReducer 
} = authSlice;

export const { 
  doSetAuthLogin, 
  doSetUserInfo, 
  doSetFinishProfile, 
  doLogout, 

  doSetSignupInfo,
  doClearSignupInfo,
} = authActions;

export default authSlice;
