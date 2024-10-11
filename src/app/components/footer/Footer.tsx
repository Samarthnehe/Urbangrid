import React from "react";
import LogoWhite from "../../assets/logo-white.png";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-[#212529] min-h-[40vh] flex items-center justify-center">
      <div className="w-[100%] md:w-[60%] h-full py-20 flex flex-col items-center justify-center">
        <Image
          style={{ objectFit: "cover", overflow: "hidden" }}
          className="mb-12"
          alt="logo"
          loading="eager"
          src={LogoWhite.src}
          height={74}
          width={180}
        />
        <div className="flex space-x-10">
          <Link
            href={"./about"}
            className="text-[white] text-regular font-light  hover:text-green-600"
          >
            <p>Home</p>
          </Link>
          <Link
            href={"./about"}
            className="text-[white] text-regular font-light  hover:text-green-600"
          >
            <p>About Us</p>
          </Link>
          <Link
            href={"./about"}
            className="text-[white] text-regular font-light  hover:text-green-600"
          >
            <p>Solutions</p>
          </Link>

          <Link
            href={"./contact"}
            className="text-[white] text-regular font-light  hover:text-green-600"
          >
            <p>Gallery</p>
          </Link>
        </div>
        <div className="h-[1px] bg-[rgba(255,255,255,0.32)] w-[60vw] mb-8 mt-8"></div>
        <p className="text-white font-light text-xs">
          Copyright © 2022 Urbangrid Workspaces LLP. All rights reserved.
        </p>
      </div>
    </div>
  );
}
