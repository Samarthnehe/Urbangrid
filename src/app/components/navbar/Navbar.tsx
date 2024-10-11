import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navbarData } from "@/app/data/navbar";
import Image from "next/image";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="hidden px-[10%] py-8 md:flex items-center justify-between z-10 w-full h-[10vh]">
      <div className="text-black font-extrabold text-2xl">
        <Image
          style={{ objectFit: "cover", overflow: "hidden" }}
          alt="logo"
          loading="eager"
          src={Logo.src}
          height={62}
          width={120}
        />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-16 mr-10">
          {navbarData.map((item, index) => {
            return (
              <Link
                key={`nav-${item.id}-${index}`}
                href={item.href}
                className="text-[#1D1D1D] text-sm font-normal hover:text-green-600"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Button
            variant="default"
            size="lg"
            className="bg-[#16AE7E] px-4 hover:bg-green-900 rounded-[8px] text-sm text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
