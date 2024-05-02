import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { skills } from "@/types/skills";

export const Skills = () => {
  return (
    <>
      <div className="flex items-start">
        <div>
          <h1
            className={cn(
              "-rotate-90 font-mono text-[30px] text-[#D55353] sm:mt-2 md:mt-14 leading-[90px] md:text-[60px]",
              fontTitanOne.variable
            )}
          >
            SKILLS
          </h1>
        </div>
        {/* SKILL LIST */}
        <div className="flex flex-wrap relative -z-10 sm:gap-1 md:gap-4 md:h-6 sm:w-2/3 md:w-full">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded p-2 sm:text-[10px] md:text-sm cursor-pointer bg-[#D55353] text-orange-100 hover:bg-orange-100 hover:text-[#D55353]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
