import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";

export const Education = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <h1
            className={cn(
              "font-mono sm:text-[30px] md:text-[60px] text-[#D55353] mt:0 md:mt-6 leading-[90px] sm:ml-4 md:ml-12 ",
              fontTitanOne.variable
            )}
          >
            EDUCATION
          </h1>
        </div>
        <div className="flex sm:mt-0 sm:flex-col sm:items-center md:flex-row md:mt-14">
          <div className="sm:p-4 md:p-12 sm:pl-4 md:pl-20 md:pr-0 2xl:pl-36 sm:w-full lg:w-1/2 ">
            <h1 className="font-bold text-base">Frontend Developer</h1>
            <p>Grit Academy - Malmö</p>
            <p>2022 - 2024</p>
          </div>
          <div className="flex flex-col justify-center w-2/3 sm:w-full sm:pl-4 md:pl-0">
            <p
              className={cn(
                "font-serif text-[#967373] my-5",
                fontUbuntu.variable
              )}
            >
              A program centered around front end development and JavaScript.
              Acquired various skills by creating dynamic projects utilizing a
              range of technologies including HTML, CSS, JavaScript, TypeScript,
              React, Node.js and Next.js. Additional courses covered essential
              topics such as backend databases, Git version control, project
              management, and Design & UX principles.
            </p>
          </div>
        </div>
        <hr className="h-2 bg-[#D55353] rounded mt-28" />
      </div>
    </>
  );
};
