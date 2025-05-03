import AdminForgotPassword from "./components/admin-forgot-password.component";
import CreateNewPasswordComponent from "./components/create-new-password.component";
import ForgotPasswordComponent from "./components/forgot-password.component";
import LoginFormComponent from "./components/login-form.component";
import OTPPageComponent from "./components/otp-page.component";
import SignUpFormComponent from "./components/sign-up-form.component";

export interface ILoginFormValues  {
    email: string;
    password: string;
    confirmPassword: string;
    shopName: string;
    shopDescription: string;
    shopPhoneNumber: string;
    image: File | null;
};

export interface ILoginTypesProps {
    onSwitchForm: (formType: FormType) => void;
}

export type FormType = "LOGIN" | "SIGNUP" | "FORGOT_PASSWORD" | "OTP" | "NEW_PASSWORD" | "ADMIN";

export const formMap: Record<FormType, React.ComponentType<{ onSwitchForm: (type: FormType) => void }>> = {
    LOGIN: LoginFormComponent,
    SIGNUP: SignUpFormComponent,
    FORGOT_PASSWORD: ForgotPasswordComponent,
    OTP: OTPPageComponent,
    NEW_PASSWORD: CreateNewPasswordComponent,
    ADMIN: AdminForgotPassword
};