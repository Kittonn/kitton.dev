import Link from "next/link";
import { navLinks } from "@/config/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <h1>Kittipod L.</h1>
        <ul>
          {navLinks.map((link) => (
            <li>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
