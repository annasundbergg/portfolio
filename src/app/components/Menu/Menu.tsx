"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/types/navbar";
import { motion } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      z: 100,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* RESPONSIVE MENU */}
      <div className="h-24 pt-11">
        <button
          onClick={toggleMenu}
          className="cursor-pointer absolute right-[2.75rem] flex justify-center items-center text-center rounded-[500px] bg-[#D55353] w-[50px] h-[50px] text-white"
        >
          Menu
        </button>
      </div>

      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="z-100 fixed top-0 left-0 w-screen h-screen bg-[#D55353] text-pink-50 flex flex-col justify-center items-center gap-9 text-4xl overflow-y-hidden"
        >
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-sm !z-100 absolute top-[2.75rem] right-[2.75rem] flex justify-center items-center text-center rounded-[500px] bg-white w-[50px] h-[50px] text-[#D55353]"
          >
            Close
          </button>
          {links.map((link) => (
            <motion.div
              className=""
              key={link.title}
              variants={listItemVariants}
            >
              <Link href={link.url} onClick={() => setOpen(false)}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Menu;
