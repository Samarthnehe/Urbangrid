import React from "react";
import { Button } from "../ui/button";

export function Talk() {
  return (
    <div className="min-h-[35vh] bg-[#16AE7E] relative">
      <div className="space-y-10 md:space-y-0 w-[90%] mx-[5%] flex flex-col justify-center absolute h-full">
        <div>
          <h1 className="font-medium text-white text-base mb-7 w-[100%] md:w-[70%]">
            Be a part of the future of career development! Tell us what your
            expectations are from us or what you think about us.
          </h1>
          <Button
            variant="default"
            size="lg"
            className="bg-[white] hover:bg-green-900 hover:text-white rounded-[8px] text-[#16AE7E]"
          >
            Let's Talk
          </Button>
        </div>
        <div className="flex flex-row self-start md:self-end space-x-8">
          <img
            src="https://go-assets.ibcdn.com/u/GI/images/1728572086461-linkedin.png"
            height="32"
            width="32"
          />
          <img
            src="https://go-assets.ibcdn.com/u/GI/images/1728572072399-instagram.png"
            height="32"
            width="32"
          />
          <img
            src="https://go-assets.ibcdn.com/u/GI/images/1728572105901-twitter.png"
            height="32"
            width="32"
          />
        </div>
      </div>
    </div>
  );
}
