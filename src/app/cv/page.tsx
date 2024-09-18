import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { InfoBar } from "./components/InfoBar";
import { CVHeader } from "./components/CvHeader";
import { Bio } from "./components/Bio";

export default function CVpage() {
  return (
    <>
      <div className="flex justify-center items-center h-full sm:overflow-hidden">
        <div className="flex flex-col justify-center items-center 2xl:w-10/12">
          <CVHeader />
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col sm:gap-10 md:gap-24 lg:gap-32 xl:gap-32">
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
