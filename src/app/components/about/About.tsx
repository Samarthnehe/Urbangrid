import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ValueVector1 from "../../assets/values-vector-1.png";
import AboutImage from "../../assets/about-vector.png";

export const About = () => {
  return (
    <section className="h-auto md:h-[80vh] md:px-[5%] relative flex flex-col md:flex-row items-center justify-center space-y-12 md:space-x-24 md:space-y-0">
      <Image
        style={{ objectFit: "cover", scale: 0.8 }}
        height={300}
        width={300}
        alt="bannerImage-2"
        loading="eager"
        src={ValueVector1.src}
        className="absolute -top-[100px] -z-[3] -left-[100px]"
      />
      <div className="w-[100vw] md:w-[100%] h-full flex items-center justify-center flex-[2.5] ">
        <Image
          style={{ objectFit: "cover", overflow: "hidden" }}
          height={600}
          width={600}
          alt="bannerImage-1"
          loading="eager"
          className="md:scale-[1.3] -mx-[10%]"
          src={AboutImage.src}
        />
      </div>
      <div className="flex flex-col space-y-10 justify-between items-start flex-[3] md:pr-10 px-[5%] md:px-0">
        <h1 className="text-[#1d1d1d] text-3xl md:text-5xl font-normal">
          Coworking Reimagined for India's Dynamic Work Culture
        </h1>
        <p className="text-[#1d1d1d] text-sm font-light">
          At Urbangrid, we offer flexible co-working spaces across India’s top
          cities, designed to foster collaboration and productivity. Join a
          thriving community and discover a workspace that adapts to your needs,
          helping you grow and succeed.
        </p>
        <Button
          variant="default"
          size="lg"
          className="bg-[#16AE7E] px-4 hover:bg-green-900 rounded-[8px] text-sm text-white"
        >
          Know more
        </Button>
      </div>
    </section>
  );
};
