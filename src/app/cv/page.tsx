import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { InfoBar } from "./components/InfoBar";
import { CVHeader } from "./components/CvHeader";
import { Bio } from "./components/Bio";

export default function CVpage() {
  return (
    <>
      <div className="flex justify-center items-center h-full sm:w-screen sm:overflow-hidden">
        <div className="flex flex-col justify-center items-center sm:w-screen md:w-screen 2xl:w-10/12">
          <CVHeader />
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-24 lg:gap-32 xl:gap-32">
            <InfoBar />
            <Bio />
            <Skills />
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
