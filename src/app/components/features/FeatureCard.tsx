import Image from "next/image";
import React from "react";
import FeatureImage from "../../assets/feature.png";
import { Button } from "../ui/button";

const FeatureItem = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-1">
        <img
          src="https://go-assets.ibcdn.com/u/GI/images/1728574535539-black_tick.png"
          height="14px"
          width="24px"
          className="scale-75 mr-1"
        />
        <p className="font-medium text-[#1d1d1d] text-base">
          Expansive Network
        </p>
      </div>
      <p className="text-[rgb(29,29,29,0.8)] text-xs font-light">
        At Urbangrid, we offer flexible coworking spaces across India’s top
        cities, designed to foster collaboration and productivity.
      </p>
    </div>
  );
};
export const FeatureCard = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-start">
      <div className="flex flex-col space-y-7 md:mr-20">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <Button
          variant="default"
          size="lg"
          className="bg-[#16AE7E] hover:bg-green-900 rounded-[8px] text-sm text-white w-[50%] md:w-[30%]"
        >
          Book a tour
        </Button>
      </div>
      <div>
        <Image
          style={{ objectFit: "cover", overflow: "hidden" }}
          height={550}
          width={550}
          alt="bannerImage-1"
          loading="eager"
          className="mb-8 md:mb-0"
          src={FeatureImage.src}
        />
      </div>
    </div>
  );
};
