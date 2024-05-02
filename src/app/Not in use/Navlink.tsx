"use client";
import Link from "next/link";
import { linkProps } from "@/types/navbar";
import { usePathname } from "next/navigation";

const Navlink = ({ url, title }: linkProps) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Link
      className={`p-1 ${
        pathName === url && "bg-pink-50 text-rose-800 rounded"
      }`}
      href={url}
    >
      {title}
    </Link>
  );
};

export default Navlink;
