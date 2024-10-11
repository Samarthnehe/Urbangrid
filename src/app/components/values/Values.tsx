import React from "react";
import Vector2 from "../../assets/feature-vector-2.png";
import Image from "next/image";

import ValuesVector2 from "../../assets/values-vector-2.png";
import { valuesData } from "../../data/values";

function Values() {
  return (
    <div className="h-auto py-16 md:h-[60vh] relative flex items-center justify-center overflow-hidden">
      <Image
        style={{ objectFit: "cover", overflow: "hidden" }}
        height={300}
        width={300}
        alt="bannerImage-2"
        loading="eager"
        src={ValuesVector2.src}
        className="absolute -bottom-[250px] -z-[3] -right-[0px]"
      />
      <div className="w-[90%] flex justify-center items-center flex-col space-y-8">
        <h1 className="text-[#1d1d1d] text-3xl">OUR VALUES</h1>
        <div className=" box-border flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-6 md:space-y-0">
          {valuesData.map((item, idx) => {
            return (
              <div className="bg-[#FDF4DB] h-auto md:h-[250px] w-[100%] md:w-[25%] flex flex-col items-center justify-center p-8 rounded-[8px] z-3 space-y-4">
                <img src={item.image} height="30" width="30" />
                <h1 className="text-base font-bold text-[#1d1d1d]">
                  {item.title}
                </h1>
                <p className="text-[#333333] text-center text-xs font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;
