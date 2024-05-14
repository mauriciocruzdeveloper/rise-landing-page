import Image from "next/image";
import React from "react";

function FooterSection() {
  const product = ["Apollo", "Pricing", "Features"];
  const company = ["Manifest", "Community", "Contact"];
  const resources = [
    "Help center",
    "Report bug",
    "Terms of use",
    "Privacy policy",
  ];
  return (
    <div className="bg-customDark text-white flex justify-between flex-col">
      <section className="bg-customDark pt-16 pb-32 text-white flex justify-around gap-8 px-8 flex-col md:flex-row lg:px-[10rem]">
        <div>
          <Image
            width={100}
            height={50}
            src="/images/LOGO1.png"
            alt="footer logo"
          />
          <p className="text-customGray font-bold">The begginning of the AI</p>
        </div>
        <div className="flex-grow flex justify-around flex-col gap-8 md:flex-row">
          <div>
            <p className="font-bold">Product</p>
            <div className="flex flex-col gap-4 mt-4">
              {product.map((link, index) => (
                <p
                  className="text-[14.8px] font-semibold text-customGray"
                  key={index}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <div className="flex flex-col gap-4 mt-4">
              {company.map((link, index) => (
                <p
                  className="text-[14.8px] font-semibold text-customGray"
                  key={index}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold">Resources</p>
            <div className="flex flex-col gap-4 mt-4">
              {resources.map((link, index) => (
                <p
                  className="text-[14.8px] font-semibold text-customGray"
                  key={index}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row gap-8 justify-around">
          <div>Argenia</div>
          <div>argenia.sas@gmail.com</div>
          <div>argenia.ar</div>
        </div>
      </section>
    </div>
  );
}

export default FooterSection;
