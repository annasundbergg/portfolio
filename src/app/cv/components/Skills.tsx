import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { skills } from "@/types/skills";

export const Skills = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-start h-80">
          <div>
            <h1
              className={cn(
                "-rotate-90 font-mono text-[40px] text-[#D55353] ml-[-40px] sm:mt-20 md:mt-14 leading-[90px] md:text-[60px]",
                fontTitanOne.variable
              )}
            >
              SKILLS
            </h1>
          </div>
          {/* SKILL LIST */}
          <div className="flex flex-wrap relative -z-10 m-auto sm:gap-1 md:gap-4 md:h-6 sm:w-3/4 md:w-full md:mt-10">
            {skills.map((skill) => (
              <div
                key={skill}
                //den mesta stylingen här fungerar inte pga z-index på parent element, men tar jag bort det så fungerar inte menyn som den ska
                className="rounded sm:p-1 sm:text-[10px] md:text-sm md:p-2 cursor-pointer bg-[#D55353] text-orange-100 hover:bg-orange-100 hover:text-[#D55353]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <hr className="h-2 bg-[#D55353] rounded sm:mt-4 md:mt-20" />
      </div>
    </>
  );
};
