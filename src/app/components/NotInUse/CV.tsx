"use client";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import CVcomp from "./CV-swe";

export default function CV() {
  const [lang, setLang] = useState("eng");

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "eng" ? "swe" : "eng"));
  };
  return (
    <>
      <div className="flex flex-col sm:justify-center sm:items-center">
        {/* <div className="absolute right-[8rem] flex justify-center items-center text-center rounded-[500px] bg-[#D55353] w-[50px] h-[50px] text-white">
          Menu
        </div> */}
        {/* <div className="md:place-self-center">
          <Image
            className="rounded-[100px] ml-[130px] sm:w-[200px] sm:ml-[50px] md:w-[600px]"
            src={"/annas.jpg"}
            width={600}
            height={600}
            alt="Photo of Anna"
          ></Image>
        </div> */}

        <div className="mt-28 flex flex-col sm:justify-center sm:items-center gap-3">
          {/* Toggle funkar ej vid -z-10, och den syns när menyn ploppar upp annars */}
          <div className="md:absolute md:right-[10rem]  -z-10">
            <Toggle
              className="mt-0 w-20"
              data-state={lang === "eng" ? "on" : "off"}
              onClick={toggleLanguage}
            >
              {lang == "eng" ? "Swedish" : "English"}
            </Toggle>
          </div>

          <div className="md:place-self-center">
            {lang === "swe" ? (
              <Image
                className="sm:w-[300px] md:w-[500px]"
                alt="Swedish CV"
                src={"/images/CV-swe.jpg"}
                width={500}
                height={1000}
              ></Image>
            ) : (
              // <CVcomp swe={true}></CVcomp>
              <Image
                className="sm:w-[300px] md:w-[500px]"
                alt="English CV"
                src={"/images/CV-eng.jpg"}
                width={500}
                height={1000}
              ></Image>

              // <CVcomp swe={false} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
