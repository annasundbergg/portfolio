import { fontJost, fontUbuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Description = () => {
  return (
    <div className="w-[80%] md:w-[100%]">
      <p
        className={cn(
          "font-sans text-[20px] text-[#7d5656]",
          fontJost.variable
        )}
      >
        With a passion for enhancing the user experience and having fun doing so
      </p>
      <div className="flex sm:gap-2 md:gap-4 -z-10">
        <Link href={"/cv"} className="">
          <h1
            className={cn(
              "font-serif text-[#D55353] my-5 sm:text-[20px] md:text-[40px]",
              fontUbuntu.variable
            )}
          >
            Read more
          </h1>
        </Link>

        <div className="place-self-center">
          <Link href={"/cv"} className="">
            <FontAwesomeIcon
              className="rotate-45 sm:w-5 md:w-9 "
              icon={faCircleArrowUp}
              color="#D55353"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};
