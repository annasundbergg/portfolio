import Image from "next/image";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="pb-4">
          <Image
            className=""
            src={"/anna.png"}
            width={50}
            height={50}
            alt="Photo of Anna"
          ></Image>
        </div>
        <div className="flex w-80">
          <h1
            className={cn(
              "font-serif  text-[#D55353] my-5 sm:text-[20px] md:text-[40px]",
              fontUbuntu.variable
            )}
          >
            Hello, I&apos;m Anna
          </h1>
        </div>
      </div>
      <div className="flex flex-col my-8 sm:leading-[40px] md:leading-[80px] xl:leading-[120px]">
        <h1
          className={cn(
            "font-mono text-[#D55353] sm:text-[40px] md:text-[50px] xl:text-[100px]",
            fontTitanOne.variable
          )}
        >
          A FRONTEND
        </h1>
        <h1
          className={cn(
            "font-mono  text-[#D55353] sm:text-[40px] md:text-[55px] xl:text-[120px]",
            fontTitanOne.variable
          )}
        >
          DEVELOPER
        </h1>
      </div>
    </>
  );
};
