import { fontTitanOne } from "@/lib/fonts";
import { MessageForm } from "./components/Form";
import { cn } from "@/lib/utils";
import Contact from "./components/contact";

const ContactPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-row items-center justify-center m-auto gap-0 xl:ml-[15rem] xl:mt-[1rem] 2xl:mt-[15rem] 2xl:ml-[40rem]">
        <p
          className={cn(
            "sm:hidden md:block -z-10 font-mono text-[#D55353] md:-rotate-90 sm:text-[50px] md:text-[70px] 2xl:text-[130px]",
            fontTitanOne.variable
          )}
        >
          CONTACT
        </p>
        <div className="sm:w-[300px] md:w-[500px] min-h-[300px] flex items-center justify-center">
          <MessageForm></MessageForm>
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
