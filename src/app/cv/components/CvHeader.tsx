import { fontTitanOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CVHeader = () => {
  return (
    <>
      <div className="flex w-1/2 mb-6 p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center sm:gap-4 md:gap-8 lg:gap-24">
        <h1
          className={cn(
            "font-mono sm:text-[30px] text-[#D55353] mt-8 sm:leading-[30px] md:text-[70px] md:leading-[65px] lg:text-[90px] lg:leading-[75px]",
            fontTitanOne.variable
          )}
        >
          Anna Sundberg
        </h1>
        <Image
          className="rounded-full sm:w-[150px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-1/2 "
          src={"/annasundberg.jpg"}
          width={600}
          height={600}
          alt="Photo of Anna"
        ></Image>
      </div>
    </>
  );
};
