import Image from "next/image";

export const HomePagePhoto = () => {
  return (
    <div className="flex p-8 sm:hidden lg:block">
      <Image
        className="rounded-[100px] ml-[130px] sm:w-[200px] sm:ml-[50px] lg:w-96 xl:w-[590px]"
        src={"/annas.jpg"}
        width={600}
        height={600}
        alt="Photo of Anna"
      ></Image>
    </div>
  );
};
