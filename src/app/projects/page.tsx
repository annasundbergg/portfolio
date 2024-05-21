import { projectItems } from "@/types/project";
import ProjectList from "./components/ProjectList";
import { ProjectsHeader } from "./components/ProjectsHeader";

export default function Projects() {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center md:w-6/7 2xl:w-10/12">
          <ProjectsHeader />

          <div className="flex flex-col w-full justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 sm:gap-0 md:gap-24 lg:gap-24 xl:gap-24 mt-28 mb-28">
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
