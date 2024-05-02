import { ProjectInfo } from "./ProjectInfo";

export const ProjectItems = () => {
  return (
    <>
      <div className="h-fit px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-24 lg:gap-24 xl:gap-24">
        <ProjectInfo
          title="Movierater"
          description="A web application created with focus on exploring the functionalities
          of Google Cloud Platform. The project consisted of multiple tasks such
          as developing and integrating frontend and API, perform CRUD
          operations using GCP Firestore, building a CI/CD pipeline and
          implementing authentication using Microsoft Entra ID."
        ></ProjectInfo>
        <ProjectInfo
          title="Weather App"
          description="A web application showing the weahter forecast fetched from the openweathermap API"
        ></ProjectInfo>
      </div>
    </>
  );
};
