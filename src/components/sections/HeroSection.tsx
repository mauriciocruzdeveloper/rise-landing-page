import React from "react";
import MainButton from "../common/MainButton";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section 
      className="bg-gradient-to-b from-indigo-700 to-white flex flex-col justify-center items-center px-8 "
    >
      {/* <div className="bg-customDark py-3 px-4 inline-flex text-white rounded-full">
        Announcing our Public Beta <ChevronRight />
      </div> */}

      <p className="text-white text-[35.8px] md:text-[75.8px] text-center mt-8">
        Argenia
      </p>
      <p className="text-[#706D79] font-semibold text-center my-4">
        The beggining is come
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
