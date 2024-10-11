import React from "react";

import Image from "next/image";
import Vector1 from "../../assets/feature-vector-1.png";
import Vector2 from "../../assets/feature-vector-2.png";
import LandingImage from "../../assets/landing.png";

import { Button } from "../ui/button";

import { heroData } from "../../data/hero";

export const Hero = () => {
  return (
    <div className="h-[90vh] w-[100vw] flex items-center justify-center relative md:h-[85vh]">
      <Image
        style={{ objectFit: "cover", overflow: "hidden" }}
        height={400}
        width={400}
        alt="bannerImage-1"
        loading="eager"
        src={Vector1.src}
        className="absolute -top-[500px] -left-[0px]"
      />
      <Image
        style={{ objectFit: "cover", overflow: "hidden" }}
        height={300}
        width={300}
        alt="bannerImage-2"
        loading="eager"
        src={Vector2.src}
        className="absolute -bottom-[300px] -right-[50px] scale-[0.7]"
      />
      <div className="container mr-[5%] ml-[5%] md:ml-[10%] w-[100%] flex flex-col-reverse md:flex-row justify-between items-center space-y-8 md:space-y-10 md:space-x-8 md:[py-[10%] h-[50vh]]">
        <div className="flex-1 space-y-10">
          <div className="space-y-6 md:space-y-4">
            <h1 className="text-sm text-[#E55812] font-medium md:text-lg">
              {heroData.termsAndConditions}
            </h1>
            <h1 className="text-4xl text-black font-base md:text-6xl md:leading-tight">
              {heroData.header}
            </h1>
            <p className="text-sm text-[#4A4A4A] font-regular md:text-sm">
              {heroData.subTitle}
            </p>
          </div>
          <div className="flex space-x-3 items-center mt-10 md:space-x-7 ">
            <Button
              variant="default"
              size="lg"
              className="bg-[#16AE7E] hover:bg-green-900 rounded-[8px] text-sm text-white w-[30%]"
            >
              Book a tour
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-[100%] mb-10 -mt-4 md:mb-0 mb:mt-0 relative flex items-center justify-end overflow-hidden">
            <Image
              style={{ objectFit: "cover", overflow: "hidden" }}
              height={600}
              width={600}
              alt="bannerImage-1"
              loading="eager"
              className="scale-[1.2] md:scale-[1]"
              src={LandingImage.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
