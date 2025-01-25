import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";
import { experience } from "@/types/experience";

export const Experience = () => {
  return (
    <>
      {/* EXPERIENCE CONTAINER  */}
      <div className="">
        <div className="flex flex-col items-end sm:mr-2 md:mr-12 sm:pb-14 md:pb-32">
          <h1
            className={cn(
              "font-mono sm:text-[30px] md:text-[60px] text-[#D55353] sm:mr-4 md:mr-[-25px]",
              fontTitanOne.variable
            )}
          >
            EXPERIENCE
          </h1>
        </div>

        {/* EXPERIENCE LIST LARGE SCREEN */}
        <div className="sm:hidden md:block">
          {/* EXPERIENCE LIST ITEM 0 */}
          <div className="flex justify-between sm:h-100 md:h-64">
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
                Frontend Engineer
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Using Typescript, React and GraphQL to build and enhance our
                Early Childhood platform to make life easier for educators and
                families. We create intuitive features that simplify childcare
                management, improve communication, and support the vital work of
                early childhood professionals.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                October 2024 - current
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit">
                Famly, Copenhagen
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 1 */}
          <div className="flex justify-between sm:h-100 md:h-64">
            {/* LEFT */}
            <div className="w-1/2">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Frontend Developer Intern
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Creating web applications independently and as part of a team
                focusing on exploring the functionalities of Google Cloud
                Platform. My tasks includes developing and integrating frontend
                with APIs, building CI/CD pipelines while practising version
                control.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                December 2023 - September 2024
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
          <div className="flex justify-between sm:h-100 md:h-64">
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
              <div className="p-3 text-sm text-[#967373]">
                Assist customers by phone, e-mail and chat with queries
                regarding energy solutions such as electricity grid, electricity
                trading, solar panels, district heating as well as pricing and
                other customer service related queries.
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
          <div className="flex justify-between sm:h-100 md:h-64">
            {/* LEFT */}
            <div className="w-1/2">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                CS Partner Specialist
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Manage property accounts on Booking.com. Assist Partners with
                queries such as invoices, commercial improvements and optimizing
                sales and visibility at Booking.com. Identify and detect
                fraudulent properties and activities.
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
          <div className="flex justify-between sm:h-100 md:h-52">
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
              <div className="p-3 text-sm text-[#967373]">
                Organise the shop and stock take consisting of various
                Scandinavian products. Provide exceptional customer service,
                maintaining the highest possible standard of food and drinks
                with focus on honoring the Scandinavian culture and cuisine.
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
          <div className="flex justify-between sm:h-100 md:h-80">
            {/* LEFT */}
            <div className="w-1/2">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Barista
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Consistently provide exceptional customer experience whilst
                maintaining the highest possible standard of food and drinks
                service. Some of the daily duties includes preparing gelato and
                smoothies as well as serving coffee.
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

        {/* EXPERIENCE LIST SMALL SCREEN */}
        <div className="md:hidden">
          {/* EXPERIENCE LIST ITEM 1 */}
          <div className="flex justify-between sm:h-100 md:h-64">
            {/* LINE  */}
            <div className="w-1/6 flex justify-center items-center -z-10 mt-4">
              {/* LINE  */}
              <div className="w-1 h-full bg-[#D55353] rounded relative">
                {/* LINE CIRCLE  */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-2/3 m-auto">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Frontend Developer Intern
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Creating web applications independently and as part of a team
                focusing on exploring the functionalities of Google Cloud
                Platform. My tasks includes developing and integrating frontend
                with APIs, building CI/CD pipelines while practising version
                control.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                December 2023 - current
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit mb-10">
                Geshdo, Malmö
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 2 */}
          <div className="flex justify-between sm:h-100 md:h-64">
            {/* CENTER  */}
            <div className="w-1/6 flex justify-center items-center -z-10">
              {/* LINE  */}
              <div className="w-1 h-full bg-[#D55353] rounded relative">
                {/* LINE CIRCLE  */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
              </div>
            </div>

            {/* RIGHT  */}
            <div className="w-2/3 m-auto">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Advisor
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Assist customers by phone, e-mail and chat with queries
                regarding energy solutions such as electricity grid, electricity
                trading, solar panels, district heating as well as pricing and
                other customer service related queries.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                June 2021 - December 2023
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit mb-10">
                Kraftringen Energi, Lund
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 3 */}
          <div className="flex justify-between sm:h-100 md:h-64">
            {/* LEFT  */}
            <div className="w-1/6 flex justify-center items-center -z-10">
              {/* LINE  */}
              <div className="w-1 h-full bg-[#D55353] rounded relative">
                {/* LINE CIRCLE  */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/3 m-auto">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                CS Partner Specialist
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Manage property accounts on Booking.com. Assist Partners with
                queries such as invoices, commercial improvements and optimizing
                sales and visibility at Booking.com. Identify and detect
                fraudulent properties and activities.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                March 2019 - November 2020
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit mb-10">
                Booking.com, London
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 4 */}
          <div className="flex justify-between sm:h-100 md:h-52">
            {/* LEFT  */}
            <div className="w-1/6 flex justify-center items-center -z-10">
              {/* LINE  */}
              <div className="w-1 h-full bg-[#D55353] rounded relative">
                {/* LINE CIRCLE  */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
              </div>
            </div>

            {/* RIGHT  */}
            <div className="w-2/3 m-auto">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Barista
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Organise the shop and stock take consisting of various
                Scandinavian products. Provide exceptional customer service,
                maintaining the highest possible standard of food and drinks
                with focus on honoring the Scandinavian culture and cuisine.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                July 2018 - March 2019
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit mb-10">
                ScandiKitchen, London
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 5 */}
          <div className="flex justify-between sm:h-100 md:h-80">
            {/* LEFT  */}
            <div className="w-1/6 flex justify-center items-center -z-10">
              {/* LINE  */}
              <div className="w-1 h-full bg-[#D55353] rounded relative">
                {/* LINE CIRCLE  */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#D55353]  bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/3 m-auto">
              {/* JOB TITLE  */}
              <div className="bg-[#FBE7C9] p-3 font-semibold rounded-lg shadow-lg border-2 border-[#e7d1b1]">
                Barista
              </div>
              {/* JOB DESCRIPTION  */}
              <div className="p-3 text-sm text-[#967373]">
                Consistently provide exceptional customer experience whilst
                maintaining the highest possible standard of food and drinks
                service. Some of the daily duties includes preparing gelato and
                smoothies as well as serving coffee.
              </div>
              {/* DATES  */}
              <div className="p-3 text-[#D55353] text-sm font-semibold">
                June 2017 - April 2018
              </div>
              {/* COMPANY  */}
              <div className="px-3 py-1 rounded bg-[#FBE7C9] text-sm font-semibold w-fit mb-10">
                Mrs Ferg Gelateria, Queenstown - New Zealand
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
