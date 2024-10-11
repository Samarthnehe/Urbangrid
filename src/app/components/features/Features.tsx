import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import Vector1 from "../../assets/feature-vector-1.png";
import Vector2 from "../../assets/feature-vector-2.png";

export const Features = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-0">
      <Image
        style={{ objectFit: "cover", overflow: "hidden" }}
        height={400}
        width={400}
        alt="bannerImage-1"
        loading="eager"
        src={Vector1.src}
        className="absolute -top-[320px] -left-[100px]"
      />
      <Image
        style={{ objectFit: "cover", overflow: "hidden" }}
        height={300}
        width={300}
        alt="bannerImage-2"
        loading="eager"
        src={Vector2.src}
        className="absolute -bottom-[300px] -right-[50px] "
      />
      <div className=" relative px-[5%] md:px-[15%] w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl text-[#1D1D1D] mb-6">
          Why UrbanGrid?
        </h1>
        <Tabs
          defaultValue="location"
          className="w-[100%] flex flex-col items-center"
        >
          <TabsList className="grid w-[100%] md:w-[60%] grid-cols-4 mb-24">
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="location">
            <FeatureCard />
          </TabsContent>
          <TabsContent value="flexibility">
            <FeatureCard />
          </TabsContent>
          <TabsContent value="design">
            <FeatureCard />
          </TabsContent>
          <TabsContent value="experience">
            <FeatureCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
