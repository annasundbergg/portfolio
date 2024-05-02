import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { projectItems } from "@/types/project";
import ProjectList from "./components/ProjectList";

export default function Projects() {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center md:w-6/7 2xl:w-10/12">
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

          <div className="flex flex-col w-full justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-24 md:gap-24 lg:gap-24 xl:gap-24 mt-28 mb-28">
            {projectItems.map((project) => (
              <ProjectList
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                github={project.github}
                image={project.image}
                skills={project.skills}
              ></ProjectList>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
