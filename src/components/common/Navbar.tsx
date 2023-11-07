import Link from "next/link";
import { navLinks } from "@/config/link";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header className="fixed bg-black top-0 left-0 w-full z-50 bg-opacity-60 backdrop-blur-sm">
      <nav className="container mx-auto lg:max-w-screen-md flex justify-between items-center py-8 px-4 text-gray-100">
        <Link href="/" className="font-bold">
          Kittipod L.
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <NavItem link={link} key={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
