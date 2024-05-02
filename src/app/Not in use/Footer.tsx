import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center gap-10 py-10 absolute bottom-0 w-full sm:static">
        <a href="https://www.linkedin.com/in/sundberganna" target="_blank">
          <Image
            width={60}
            height={60}
            src="/images/linkedin.png"
            alt="LinkedIn"
          />
        </a>

        <a href="https://github.com/annasundbergg" target="_blank">
          <Image width={50} height={50} src="/github.png" alt="Github" />
        </a>
      </footer>
    </>
  );
}
