import { fontTitanOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type CvProps = {
  swe: boolean;
};

const CVcomp = ({ swe }: CvProps) => {
  return (
    <>
      <div className="container flex flex-col">
        <div className="-rotate-90 absolute">
          <h1
            className={cn(
              "font-mono text-[100px] text-[#D55353] mt-20 mr-20",
              fontTitanOne.variable
            )}
          >
            SKILLS
          </h1>
        </div>

        <div>
          <h1>Experience</h1>
          <div>
            <h3>Internship, Geshdo Now</h3>
            <p>December 2023 - current</p>
            <p>
              Creating a web application focusing on exploring the
              functionalities of Google Cloud Platform. The project consisted of
              multiple tasks such as developing and integrating frontend and
              API, perform CRUD operations using GCP Firestore, building a CI/CD
              pipeline and implementing authentication using Microsoft Entra ID.
              Skills: React, Typescript, Node.js, Express.js, Vite, Google Cloud
              Platform, Microsoft Entra ID (Azure AD), Docker, CI/CD.
            </p>
          </div>
          <div>
            <h3>Advisor, Kraftringen Energi</h3>
            <p>June 2021 - December 2023</p>
            <p>
              Helping customers via phone, email, and chat with inquiries about
              energy solutions, including topics such as electricity grid,
              electricity trading, solar panels, district heating, and other
              energy-related matters. Skills: Communication, Customer
              Relationship Management, Adaptability, Team Collaboration,
              Conflict Resolution
            </p>
          </div>
          <div>
            <h3>CS Partner Specialist, Booking.com - London</h3>
            <p>March 2019 - November 2020</p>
            <p>
              Manage property accounts on Booking.com. Assist Partners with
              queries such as invoices, commercial improvements and optimizing
              sales and visibility at Booking.com. Identify and detect
              fraudulent properties and activities. Skills: Communication,
              Customer Relationship Management, Adaptability, Team
              Collaboration, Sales Optimization
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVcomp;
