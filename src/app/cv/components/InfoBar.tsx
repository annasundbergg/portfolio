import { cn } from "@/lib/utils";
import { fontUbuntu } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const InfoBar = () => {
  return (
    <>
      <div className="flex justify-evenly tracking-wider gap-4 sm:flex-col md:flex-row">
        <div className="flex justify-center items-center gap-4">
          <FontAwesomeIcon
            className="sm:w-2 md:w-5 "
            icon={faMapPin}
            color="#D55353"
          ></FontAwesomeIcon>
          <p
            className={cn(
              "font-serif text-[#D55353] font-bold",
              fontUbuntu.variable
            )}
          >
            Malmö
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FontAwesomeIcon
            className="sm:w-2 md:w-5 "
            icon={faPhone}
            color="#D55353"
          ></FontAwesomeIcon>
          <p className={cn("font-serif text-[#D55353]", fontUbuntu.variable)}>
            +46727430220
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FontAwesomeIcon
            className="sm:w-2 md:w-5 "
            icon={faEnvelope}
            color="#D55353"
          ></FontAwesomeIcon>
          <p className={cn("font-serif text-[#D55353]", fontUbuntu.variable)}>
            annasundberg95@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex sm:gap-4 md:gap-16">
            <Link
              href={"https://linkedin.com/in/sundberganna"}
              className={cn("font-serif text-[#D55353]", fontUbuntu.variable)}
            >
              <FontAwesomeIcon
                className="w-5"
                icon={faLinkedin}
                color="#D55353"
              ></FontAwesomeIcon>
            </Link>
            <Link
              href={"https://github.com/annasundbergg"}
              className={cn("font-serif text-[#D55353]", fontUbuntu.variable)}
            >
              <FontAwesomeIcon
                className="w-5"
                icon={faGithub}
                color="#D55353"
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
