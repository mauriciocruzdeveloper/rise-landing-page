import React from "react";

function LogoGroupSection() {
  return (
    <div className="pb-32 flex flex-col justify-center items-center w-full">
      {/* <div className="mt-16">
        <img src="/images/hero.png" alt="hero image" />
      </div> */}

      <section>
        <p className="text-[22px] text-customDark lg:text-customGray text-center pt-16 pb-8 font-bold">
          Fullstack sistem in minutes from natural language narration
        </p>
      </section>

      <div className="w-full flex justify-center">
        <img src="/images/nextstrapi.png" alt="logo group" />
      </div>
    </div>
  );
}

export default LogoGroupSection;
