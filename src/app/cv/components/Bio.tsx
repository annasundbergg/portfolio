import { cn } from "@/lib/utils";
import { fontUbuntu } from "@/lib/fonts";

export const Bio = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center sm:text-sm md:text-base">
        <p
          className={cn(
            "font-serif text-[#967373] sm:w-full md:w-2/3 md:y-5 2xl:w-1/2",
            fontUbuntu.variable
          )}
        >
          After traveling the world and living in New Zealand and London, I
          moved back to Sweden to study physiotherapy. During my studies, I
          worked in customer service where an interest in system development
          grew as I saw the impact the user experience of our applications had
          on customer satisfaction. My curiosity for the world of tech outgrew
          my interest in physiotherapy, so I discontinued my studies as a
          physio, and now here I am. I&apos;ve become a passionate frontend
          developer ready to take on new adventures and challenges.
        </p>
      </div>
    </>
  );
};
