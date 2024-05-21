"use client";
import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({
  title,
  description,
  link,
  github,
  image,
  skills,
}: Project) {
  return (
    <>
      {/* CONTAINER  */}
      <div className="flex flex-col">
        <div className="sm:hidden md:block md:h-2 bg-[#D55353] rounded"></div>

        <div className="flex sm:flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center md:w-6/7 2xl:w-10/12">
            {/* TEXT CONTAINER  */}
            <div className="px-4 sm:px-4 md:px-8 lg:px-12 xl:px-14 flex flex-col gap-20 md:gap-24 lg:gap-32 xl:gap-48">
              {/* PROJECT INFO CONTAINER  */}
              <div className="flex flex-col">
                <div className="flex flex-col mt-14">
                  <div className="">
                    <h1
                      className={cn(
                        "font-mono text-[40px] text-[#D55353]",
                        fontTitanOne.variable
                      )}
                    >
                      {title}
                    </h1>
                  </div>
                  <div className="">
                    <p
                      className={cn(
                        "font-serif text-[#967373] my-5",
                        fontUbuntu.variable
                      )}
                    >
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-wrap relative -z-10 gap-3 h-6 sm:mb-10 lg:mb-0">
                    {skills &&
                      skills.map((skill, index) => (
                        <div
                          key={index}
                          className="rounded p-2 text-sm cursor-pointer bg-[#D55353] text-orange-100 hover:bg-orange-100 hover:text-[#D55353]"
                        >
                          {skill}
                        </div>
                      ))}
                  </div>
                  <div
                    className={cn(
                      "font-serif text-[#967373] flex mt-8 gap-3 underline sm:pt-6 md:pt-20 lg:pt-0",
                      fontUbuntu.variable
                    )}
                  >
                    <Link href={link}>Visit the app</Link>
                    {github && <Link href={github}>Visit the github repo</Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PHOTO CONTAINER  */}
          <div className="mt-14">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  ></Image>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
