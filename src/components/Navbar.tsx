"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="container mx-auto lg:max-w-screen-md flex justify-between items-center py-8 px-5 text-gray-100">
        <Link href="/" className="font-bold">
          Kittipod L.
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                pathname === link.url
                  ? "bg-neutral-800 p-2 rounded-md font-bold"
                  : "text-neutral-500"
              } hover:text-neutral-200`}
            >
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
