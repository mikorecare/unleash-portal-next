"use client";

import { FaCircleCheck } from "react-icons/fa6";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import bottom_blob from "@/assets/sign-in-page/sign-up-merchant/bottom-blob.png";
import bottom_animals from "@/assets/sign-in-page/sign-up-merchant/bottom-animals.png";
import { useEffect, useState } from "react";

const YouAreAllSet = () => {
  
    const { signupUserId } = useSelector((state: RootState) => state.Auth);
    const [showBanner, setShowBanner] = useState(true);

    setTimeout(()=>{
      setShowBanner(false);
    }, 3000);
    /**
     * Will implement logic once the endpoints are complete
     */
    
  return (
    <div
      className={`relative inset-0 h-screen w-screen ${
        showBanner ? "" : "hidden"
      }`}
    >
      <div
        className={`absolute z-10 top-1/2 left-1/2 bg-white -translate-1/2 pt-10 w-96 rounded-2xl flex flex-col gap-4 justify-center overflow-hidden ${
          showBanner ? "animate-float-in-out" : "hidden"
        }`}
      >
        <p className="font-montserrat text-3xl font-semibold text-black w-full text-center">
          You are all set!
        </p>
        <p className="font-montserrat text-sm font-medium text-website-green w-full text-center">
          Start selling now!
        </p>
        {/* Circle Check Icon with background effects */}
        <div className="relative w-20 h-20 mx-auto flex justify-center items-center">
          <FaCircleCheck className="z-50 w-12 h-12 text-website-green absolute" />
          <div className="absolute z-40 w-16 h-16 rounded-full bg-website-green opacity-20" />
          <div className="absolute z-30 w-20 h-20 rounded-full bg-website-green opacity-10" />
        </div>

        <div
          className={`relative h-40 w-full flex justify-center items-center`}
        >
          <img src={bottom_blob.src} className="absolute w-full bottom-0" />
          <img src={bottom_animals.src} className="absolute h-32" />
        </div>
      </div>
      <div className="h-screen w-screen bg-black opacity-20" />
    </div>
  );
};

export default YouAreAllSet;
