"use client";

import unleash_banner from "@/assets/unleash_banner.png";
import animals_design from "@/assets/sign-in-page/sign-in-page-animals.png";

import LoginComponentResolver from "./components/login.component.resolver";
import LoginLayout from "./login.layout";

const LoginPage = () => {
  return (
    <LoginLayout>
      <div className="absolute top-7/12 left-1/2 -translate-1/2 w-md py-9 px-10 rounded-2xl flex flex-col gap-4 justify-center bg-white">
        <img
          src={animals_design.src}
          alt="background element"
          className="w-full absolute top-0 left-0 transform -translate-y-full"
        />
        <img
          src={unleash_banner.src}
          alt="Unleash Logo"
          className="h-10 w-fit"
        />

        <LoginComponentResolver />
      </div>
    </LoginLayout>
  );
};

export default LoginPage;
