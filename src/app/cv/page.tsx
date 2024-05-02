import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { skills } from "@/types/skills";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function CVpage() {
  return (
    <>
      {/* CONTAINER  */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:w-6/7 2xl:w-10/12">
          <div className="flex w-1/2 mb-6 p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center gap-24">
            <h1
              className={cn(
                "font-mono text-[90px] text-[#D55353] mt-8 leading-[90px]",
                fontTitanOne.variable
              )}
            >
              Anna Sundberg
            </h1>
            <Image
              className="rounded-[500px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-1/2 "
              src={"/Anna Sundberg_2.jpg"}
              width={600}
              height={600}
              alt="Photo of Anna"
            ></Image>
          </div>

          {/* TEXT CONTAINER  */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-24 lg:gap-32 xl:gap-32">
            {/* INFO BAR  */}
            <div className="flex justify-evenly tracking-wider">
              <div className="flex justify-center items-center mt-10 gap-4">
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
              <div className="flex justify-center items-center mt-10 gap-4">
                <FontAwesomeIcon
                  className="sm:w-2 md:w-5 "
                  icon={faPhone}
                  color="#D55353"
                ></FontAwesomeIcon>
                <p
                  className={cn(
                    "font-serif text-[#D55353]",
                    fontUbuntu.variable
                  )}
                >
                  +46727430220
                </p>
              </div>
              <div className="flex justify-center items-center mt-10 gap-4">
                <FontAwesomeIcon
                  className="sm:w-2 md:w-5 "
                  icon={faEnvelope}
                  color="#D55353"
                ></FontAwesomeIcon>
                <p
                  className={cn(
                    "font-serif text-[#D55353]",
                    fontUbuntu.variable
                  )}
                >
                  annasundberg95@gmail.com
                </p>
              </div>
              <div className="flex justify-center items-center mt-10 gap-2">
                <Link
                  href={"https://linkedin.com/in/sundberganna"}
                  className={cn(
                    "font-serif text-[#D55353]",
                    fontUbuntu.variable
                  )}
                >
                  <FontAwesomeIcon
                    className="sm:w-2 md:w-5 "
                    icon={faLinkedin}
                    color="#D55353"
                  ></FontAwesomeIcon>
                </Link>
              </div>
            </div>
            {/* BIO CONTAINER  */}
            <div className="flex flex-col gap-12 justify-center items-center">
              <p
                className={cn(
                  "font-serif text-[#967373] my-5 md:w-2/3 2xl:w-1/2",
                  fontUbuntu.variable
                )}
              >
                After travelling the world and living in New Zealand and London,
                I moved back to Sweden to study physiotherapy. During my studies
                I worked in customer service where an interest for system
                developing grew as I saw what impact the user experience of our
                applications had on the customer satisfaction. My curiousity for
                the world of tech outgrew my interest for physiotherapy, I
                discontinued my studies as a physio and now here I am. I&apos;ve
                become a passionate frontend developer ready to take on new
                adventures and challanges.
              </p>
            </div>
            {/* SKILL CONTAINER */}
            <div className="flex items-start">
              <div>
                <h1
                  className={cn(
                    "-rotate-90 font-mono text-[60px] text-[#D55353] mt-14 leading-[90px]",
                    fontTitanOne.variable
                  )}
                >
                  SKILLS
                </h1>
              </div>
              {/* SKILL LIST */}
              <div className="relative -z-10 flex gap-4 flex-wrap h-6">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded p-2 text-sm cursor-pointer bg-[#D55353] text-orange-100 hover:bg-orange-100 hover:text-[#D55353]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION CONTAINER  */}
            <div className="flex flex-col">
              <hr className="h-2 bg-[#D55353] rounded mb-28" />

              <div className="">
                <h1
                  className={cn(
                    "font-mono text-[60px] text-[#D55353] mt-6 leading-[90px] ml-12",
                    fontTitanOne.variable
                  )}
                >
                  EDUCATION
                </h1>
              </div>
              <div className="flex mt-14">
                <div className="w-1/3 p-12 md:pl-20 2xl:pl-36">
                  <h1 className="font-bold text-base">Frontend Developer</h1>
                  <p>Grit Academy - Malmö</p>
                  <p>2022-2024</p>
                </div>
                <div className="flex flex-col gap-12 justify-center w-2/3">
                  <p
                    className={cn(
                      "font-serif text-[#967373] my-5",
                      fontUbuntu.variable
                    )}
                  >
                    A program centered around front end development and
                    JavaScript. Acquired various skills by creating dynamic
                    projects utilizing a range of technologies including HTML,
                    CSS, JavaScript, TypeScript, React, Node.js and Next.js.
                    Additional courses covered essential topics such as backend
                    databases, Git version control, project management, and
                    Design & UX principles.
                  </p>
                </div>
              </div>
              <hr className="h-2 bg-[#D55353] rounded mt-28" />
            </div>
            {/* EXPERIENCE CONTAINER  */}
            <div className="">
              <div className="flex flex-col items-end mr-12 pb-32">
                <h1
                  className={cn(
                    "font-mono text-[60px] text-[#D55353] mr-12",
                    fontTitanOne.variable
                  )}
                >
                  EXPERIENCE
                </h1>
              </div>

              {/* EXPERIENCE LIST  */}
              <div className="">
                {/* EXPERIENCE LIST ITEM 1 */}
                <div className="flex justify-between h-64">
                  {/* LEFT */}
                  <div className="w-1/2">
                    {/* JOB TITLE  */}
                    <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                      Frontend Developer Intern
                    </div>
                    {/* JOB DESCRIPTION  */}
                    <div className="p-3 text-sm italic">
                      Creating web applications independently and as part of a
                      team focusing on exploring the functionalities of Google
                      Cloud Platform. My tasks includes developing and
                      integrating frontend with APIs, building CI/CD pipelines
                      while practising version control.
                    </div>
                    {/* DATES  */}
                    <div className="p-3 text-[#D55353] text-sm font-semibold">
                      December 2023 - current
                    </div>
                    {/* COMPANY  */}
                    <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                      Geshdo, Malmö
                    </div>
                  </div>
                  {/* CENTER  */}
                  <div className="w-1/6 flex justify-center items-center -z-10">
                    {/* LINE  */}
                    <div className="w-1 h-full bg-[#D55353] rounded relative">
                      {/* LINE CIRCLE  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT  */}
                  <div className="w-1/2"></div>
                </div>

                {/* EXPERIENCE LIST ITEM 2 */}
                <div className="flex justify-between h-64">
                  {/* LEFT */}
                  <div className="w-1/2"></div>
                  {/* CENTER  */}
                  <div className="w-1/6 flex justify-center items-center -z-10">
                    {/* LINE  */}
                    <div className="w-1 h-full bg-[#D55353] rounded relative">
                      {/* LINE CIRCLE  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT  */}
                  <div className="w-1/2">
                    {/* JOB TITLE  */}
                    <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                      Advisor
                    </div>
                    {/* JOB DESCRIPTION  */}
                    <div className="p-3 text-sm italic">
                      Assist customers by phone, e-mail and chat with queries
                      regarding energy solutions such as electricity grid,
                      electricity trading, solar panels, district heating as
                      well as pricing and other customer service related
                      queries.
                    </div>
                    {/* DATES  */}
                    <div className="p-3 text-[#D55353] text-sm font-semibold">
                      June 2021 - December 2023
                    </div>
                    {/* COMPANY  */}
                    <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                      Kraftringen Energi, Lund
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE LIST ITEM 3 */}
                <div className="flex justify-between h-80">
                  {/* LEFT */}
                  <div className="w-1/2">
                    {/* JOB TITLE  */}
                    <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                      CS Partner Specialist
                    </div>
                    {/* JOB DESCRIPTION  */}
                    <div className="p-3 text-sm italic">
                      Manage property accounts on Booking.com. Assist Partners
                      with queries such as invoices, commercial improvements and
                      optimizing sales and visibility at Booking.com. Identify
                      and detect fraudulent properties and activities.
                    </div>
                    {/* DATES  */}
                    <div className="p-3 text-[#D55353] text-sm font-semibold">
                      March 2019 - November 2020
                    </div>
                    {/* COMPANY  */}
                    <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                      Booking.com, London
                    </div>
                  </div>
                  {/* CENTER  */}
                  <div className="w-1/6 flex justify-center items-center -z-10">
                    {/* LINE  */}
                    <div className="w-1 h-full bg-[#D55353] rounded relative">
                      {/* LINE CIRCLE  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT  */}
                  <div className="w-1/2"></div>
                </div>

                {/* EXPERIENCE LIST ITEM 4 */}
                <div className="flex justify-between h-52">
                  {/* LEFT */}
                  <div className="w-1/2"></div>
                  {/* CENTER  */}
                  <div className="w-1/6 flex justify-center items-center -z-10">
                    {/* LINE  */}
                    <div className="w-1 h-full bg-[#D55353] rounded relative">
                      {/* LINE CIRCLE  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT  */}
                  <div className="w-1/2">
                    {/* JOB TITLE  */}
                    <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                      Barista
                    </div>
                    {/* JOB DESCRIPTION  */}
                    <div className="p-3 text-sm italic">
                      Organise the shop and stock take consisting of various
                      Scandinavian products. Provide exceptional customer
                      service, maintaining the highest possible standard of food
                      and drinks with focus on honoring the Scandinavian culture
                      and cuisine.
                    </div>
                    {/* DATES  */}
                    <div className="p-3 text-[#D55353] text-sm font-semibold">
                      July 2018 - March 2019
                    </div>
                    {/* COMPANY  */}
                    <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                      ScandiKitchen, London
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE LIST ITEM 3 */}
                <div className="flex justify-between h-80">
                  {/* LEFT */}
                  <div className="w-1/2">
                    {/* JOB TITLE  */}
                    <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                      Barista
                    </div>
                    {/* JOB DESCRIPTION  */}
                    <div className="p-3 text-sm italic">
                      Consistently provide exceptional customer experience
                      whilst maintaining the highest possible standard of food
                      and drinks service. Some of the daily duties includes
                      preparing gelato and smoothies as well as serving coffee.
                    </div>
                    {/* DATES  */}
                    <div className="p-3 text-[#D55353] text-sm font-semibold">
                      June 2017 - April 2018
                    </div>
                    {/* COMPANY  */}
                    <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                      Mrs Ferg Gelateria, Queenstown - New Zealand
                    </div>
                  </div>
                  {/* CENTER  */}
                  <div className="w-1/6 flex justify-center items-center -z-10">
                    {/* LINE  */}
                    <div className="w-1 h-full bg-[#D55353] rounded relative">
                      {/* LINE CIRCLE  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT  */}
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
