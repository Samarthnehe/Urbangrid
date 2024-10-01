import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navbarData } from "@/app/data/navbar";

export const Navbar = () => {
  return (
    <nav className="px-[10%] py-8 flex items-center justify-between bg-white shadow-lg z-10 fixed w-full h-[10vh]">
      <div className="text-black font-extrabold text-2xl">Urbangrid</div>
      <div className="flex items-center space-x-16">
        {navbarData.map((item, index) => {
          return (
            <Link
              key={`nav-${item.id}-${index}`}
              href={item.href}
              className="text-black text-base font-medium hover:text-green-600"
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
          className="bg-green-700 hover:bg-green-900"
        >
          Book a tour
        </Button>
      </div>
    </nav>
  );
};
