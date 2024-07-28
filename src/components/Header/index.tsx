"use client";

import Link from "next/link";

import style from "./style.module.css";
import { usePathname } from "next/navigation";

type Navigator = { href: string; title: string };
const navigators: Navigator[] = [
  { href: "/", title: "HOME" },
  { href: "/about", title: "ABOUT" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className={style.header}>
      {navigators.map((nav) => (
        <Link className={style.navigator} key={nav.title} href={nav.href} data-current={pathname === nav.href}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
