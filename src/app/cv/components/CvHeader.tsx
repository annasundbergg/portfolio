import { fontTitanOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import Image from "next/image";

export const CVHeader = () => {
  return (
    <>
      <div className="flex w-1/2 mb-6 p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center gap-24 sm:gap-4">
        <h1
          className={cn(
            "font-mono sm:text-[40px] text-[#D55353] mt-8 sm:leading-[50px] md:text-[90px] md:leading-[90px]",
            fontTitanOne.variable
          )}
        >
          Anna Sundberg
        </h1>
        <Image
          unoptimized
          className="rounded-[500px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-1/2 "
          src={"/annasundberg.jpg"}
          width={600}
          height={600}
          alt="Photo of Anna"
        ></Image>
      </div>
    </>
  );
};
