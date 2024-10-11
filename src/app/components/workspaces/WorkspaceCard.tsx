"use client";
import React from "react";
import { WorkspaceCardProps } from "./types/workspace-card-types";
import rightArrow from "../../assets/right-arrow.png";
import Image from "next/image";

export const WorkspaceCard = (props: WorkspaceCardProps) => {
  return (
    <div
      className={` bg-white rounded-[16px] flex flex-col cursor-pointer w-[calc(90vw)] h-[calc(90vw/0.68)] md:w-[calc(25vw)] md:h-[calc(25vw/0.83)]`}
    >
      <div className="h-[calc((90vw/0.68)*0.64)] md:h-[calc((25vw/0.83)*0.7)] rounded-[12px] m-3 overflow-hidden">
        <img
          src={props.imgUrl}
          className="cover h-full w-full rounded-[12px] hover:scale-110 overflow-hidden transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="h-[calc((90vw/0.68)*0.36)] md:h-[calc((25vw/0.83)*0.3)] px-4 pb-8 flex flex-col justify-between">
        <p className="text-[#1D1D1D] font-semibold text-xl md:text-lg mb-[8px]">
          {props.title}
        </p>
        <p className="text-[#4A4A4A] font-light text-base md:text-sm mb-[16px]">
          {props.description}
        </p>
        <div className="flex">
          <p className="text-[#16AE7E] font-semibold text-base md:text-sm mr-2">
            {props.ctaText}
          </p>
          <Image
            style={{ objectFit: "cover", overflow: "hidden" }}
            alt="arrow-1"
            loading="eager"
            src={rightArrow.src}
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};
