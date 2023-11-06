"use client";

import Link from "next/link";
import { cn } from "@/utils/classNames";
import { usePathname } from "next/navigation";
import { NavLink } from "@/types/link";

type Props = {
  link: NavLink;
};

export default function NavItem({ link }: Props) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={link.url}
        className={cn("text-neutral-500 hover:text-neutral-200", {
          "bg-neutral-800 p-2 rounded-md font-bold text-gray-200": pathname === link.url,
        })}
      >
        {link.label}
      </Link>
    </li>
  );
}
