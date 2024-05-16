import React from "react";
import MainButton from "../common/MainButton";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section 
      className="mt-20 lg:mt-1 bg-gradient-to-b from-indigo-700 to-white flex flex-col justify-center items-center px-8 "
    >
      {/* <div className="bg-customDark py-3 px-4 inline-flex text-white rounded-full">
        Announcing our Public Beta <ChevronRight />
      </div> */}
      <p className="text-[#cbc8d3] font-semibold text-center my-2">
        The beggining is come
      </p>
      <p className="text-[#cbc8d3] font-semibold text-center my-2">
        Is here
      </p>
      <p className="text-white text-[35.8px] md:text-[100px] text-center mt-8">
        <span className="text-[#546EAB]">AR</span>
        <span className="text-[#546EAB]">GEN</span>
        <span className="text-[#4697B4]">IA</span>
      </p>
      <div className="mt-8">
        <MainButton
          text="Get Started"
          classes="h-[56px] w-[163.52px]"
          rightIconRoute="/images/chevron_right.svg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
