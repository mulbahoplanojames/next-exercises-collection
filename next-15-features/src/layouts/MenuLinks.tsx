"use client";

import { navLinks } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLinks = () => {
  const pathName = usePathname();

  return (
    <>
      <menu className="space-x-20">
        {navLinks?.map((link) => {
          const isActive = link?.path === pathName;
          return (
            <Link
              href={link?.path}
              key={link?.label}
              className={isActive ? "font-bold border-b-2 border-white" : ""}
            >
              {link?.label}
            </Link>
          );
        })}
      </menu>
    </>
  );
};

export default MenuLinks;
