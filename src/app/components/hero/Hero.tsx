import React from "react";

import Image from "next/image";

import { Button } from "../ui/button";

import { heroData } from "../../data/hero";

export const Hero = () => {
  return (
    <div
      className="h-[65vh] w-[100vw] flex items-center justify-center relative md:h-[75vh]"
      style={{
        background: `url(${heroData.backgroundImage}) no-repeat fixed`,
        backgroundSize: `cover`,
      }}
    >
      <div className="bg-[rgba(172,237,164,0.8)] absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container mx-[10%] mt-[10vh] bg-white h-[55vh] w-[100%] flex justify-between items-center px-[5%] py-[5%] space-x-10 shadow-lg md:[py-[10%] h-[50vh]]">
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <h1 className="text-4xl text-black font-semibold md:text-5xl">
                {heroData.header.first}{" "}
                <span className="text-4xl text-green-700 font-semibold md:text-5xl">
                  {heroData.header.second}
                </span>
              </h1>
              <p className="text-sm text-[#4A4A4A] font-regular md:text-base">
                {heroData.subTitle}
              </p>
            </div>
            <div className="flex space-x-3 items-center md:space-x-7">
              {heroData.stats.map((item, index) => {
                return (
                  <>
                    <div className="flex-col items-center justify-center space-y-1">
                      <h1 className="font-semibold text-base text-center md:text-xl">
                        {item.count}
                      </h1>
                      <p className="text-[#4A4A4A] font-light text-xs text-center md:text-sm">
                        {item.label}
                      </p>
                    </div>
                    {index < heroData.stats.length - 1 && (
                      <div className="h-10 w-[1px] bg-gray-500" />
                    )}
                  </>
                );
              })}
            </div>
            <div className="flex items-center space-x-5">
              <Button
                variant="outline"
                size="lg"
                className="border-[1px] border-[#D8D8D8] hover:bg-[#aceda4]"
              >
                Explore Workspace
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-green-700 hover:bg-green-900"
              >
                Enquire
              </Button>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="w-[100%] h-[35vh] relative flex items-center justify-center bg-[#CBCBCB] overflow-hidden">
              <Image
                style={{ objectFit: "cover", overflow: "hidden" }}
                fill
                alt="bannerImage-1"
                loading="eager"
                className=" overflow-hidden hover:scale-110 transition-transform duration-500 ease-in-out"
                src={heroData.homepageImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
