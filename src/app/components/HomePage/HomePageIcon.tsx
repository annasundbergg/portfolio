import Image from "next/image";

export const HomePageIcon = () => {
  return (
    <div className="flex p-8 sm:hidden lg:block">
      <Image
        className="sm:ml-3 lg:ml-32"
        src={"/anna.png"}
        width={300}
        height={300}
        alt="Photo of Anna"
      ></Image>
    </div>
  );
};
