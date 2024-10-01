import Link from "next/link";
import React from "react";

import backgroundImage from "../../assets/y-so-serious.png";
import { Button } from "../ui/button";

export const Footer = () => {
  console.log("backgroundImage", backgroundImage);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <div
          className="flex flex-col space-y-6 items-center justify-center bg-red-400 h-[30vh] w-full bg-contain bg-center bg-repeat"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        >
          <h1 className="text-3xl text-white font-semibold">
            Subscribe to our Newsletter
          </h1>
          <div className="flex w-[80vw] bg-red-400 md:w-[25vw]">
            <input
              type="text"
              placeholder="Contact Email"
              className="w-full bg-white text-sm outline-none px-4 py-4 text-[#4A4A4A] hover:border-0"
            />
            <Button
              variant="default"
              className="bg-green-700 h-full text-white hover:bg-green-900"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="h-auto w-[100vw] space-x-10 items-start bg-black py-20 px-[10%] relative flex justify-between flex-col md:flex-row md:h-[45vh]">
          <div className="flex-1 flex-col space-y-3">
            <div className="text-green-500 text-3xl font-semibold">
              Urbangrid
            </div>
            <div className="text-white text-sm font-light">
              Urbangrid is a community of people who work together, play
              together, and grow together.
            </div>
            <div className="text-white text-sm font-light">
              We are a team of passionate individuals who believe in the power
              of collaboration.
            </div>
            <div className="text-white text-sm font-light">
              We are here to help you grow your business and take it to the next
              level.
            </div>
          </div>
          <div className="flex-1 flex-col space-y-3 items-center">
            <p className="text-green-500 text-2xl font-semibold text-center cursor">
              Quick Links
            </p>
            <div className="md:text-center">
              <Link
                href=""
                className="text-white text-sm font-light text-left md:text-center"
              >
                Home
              </Link>
            </div>
            <div className="md:text-center">
              <Link
                href=""
                className="text-white text-sm font-light md:text-center"
              >
                About
              </Link>
            </div>
            <div className="md:text-center">
              <Link
                href=""
                className="text-white text-sm font-light md:text-center"
              >
                Services
              </Link>
            </div>
            <div className="md:text-center">
              <Link
                href=""
                className="text-white text-sm font-light md:text-center"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex-1 flex-col space-y-3 justify-center">
            <p className="text-green-500 text-2xl font-semibold">Contact Us</p>
            <div className="flex-1 flex-col space-y-1 justify-center">
              <p className="text-white text-sm font-light ">
                Urbangrid, 1234, Near Tokyo Tower
              </p>
              <p className="text-white text-sm font-light ">
                Cape Town, Australia
              </p>
            </div>
            <p className="text-white text-sm font-light ">
              Email: urbangrid@gmail.com
            </p>
            <p className="text-white text-sm font-light ">
              Phone: +91 6754635365
            </p>
          </div>
        </div>
      </div>
      <div className="h-10 bg-gray-800 flex items-center justify-center w-[100vw] py-8">
        <h4 className="font-normal text-white text-sm">
          © 2024 UrbanGrid. All rights reserved.
        </h4>
      </div>
    </div>
  );
};
