import { Description } from "./Description";
import { Header } from "./Header";

export default function HomePage() {
  return (
    <>
      <div className="flex overflow-hidden ml-12 lg:mx-12 xl:m-auto">
        <div className="w-[auto] flex flex-col sm:gap-6 lg:gap-2 m-auto">
          <Header />
          <Description />
        </div>
      </div>
    </>
  );
}
