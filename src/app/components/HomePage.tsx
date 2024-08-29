import { fontJost, fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex sm:overflow-hidden lg:overflow-visible lg:mx-12 xl:m-auto">
        <div className="w-[auto] flex flex-col sm:gap-6 lg:gap-2 m-auto lg:mr-0">
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

          <div className="sm:w-[80%] md:w-[100%]">
            <p
              className={cn(
                "font-sans text-[20px] text-[#7d5656]",
                fontJost.variable
              )}
            >
              With a passion for enhancing the user experience and having fun
              doing so
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
        </div>

        <div className="flex p-8 sm:hidden lg:block">
          <Image
            className="rounded-[100px] ml-[130px] sm:w-[200px] sm:ml-[50px] lg:w-96 xl:w-[590px]"
            src={"/annas.jpg"}
            width={600}
            height={600}
            alt="Photo of Anna"
          ></Image>
        </div>
      </div>
    </>
  );
}
