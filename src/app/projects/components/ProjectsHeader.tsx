import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const ProjectsHeader = () => {
  return (
    <>
      <div className="flex flex-col mb-6 p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 2xl:px-56 justify-center items-center">
        <p
          className={cn(
            "font-mono text-[#D55353] sm:text-[50px] md:text-[70px] xl:text-[100px] 2xl:text-[130px]",
            fontTitanOne.variable
          )}
        >
          PROJECTS
        </p>
        <p
          className={cn(
            "font-serif text-[20px] text-[#7d5656]",
            fontUbuntu.variable
          )}
        >
          Skills grow. So will this portfolio.
        </p>
      </div>
    </>
  );
};
