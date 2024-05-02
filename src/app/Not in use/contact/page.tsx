import { fontTitanOne } from "@/lib/fonts";
import { MessageForm } from "./components/Form";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-row items-center md:justify-center m-auto gap-0 xl:ml-[15rem] xl:mt-[1rem] 2xl:mt-[15rem] 2xl:ml-[40rem]">
        <p
          className={cn(
            "-z-10 font-mono text-[#D55353] md:-rotate-90 sm:text-[50px] md:text-[70px] 2xl:text-[130px]",
            fontTitanOne.variable
          )}
        >
          CONTACT
        </p>
        <div className="sm:w-[300px] md:w-[500px]">
          <MessageForm></MessageForm>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
