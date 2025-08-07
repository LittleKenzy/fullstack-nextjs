'use client'

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    name: "Portofolio",
    href: "/portofolio",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Little Kenzy</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {Links.map((link) => (
          <Link key={link.id} href={link.href} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log('Logged out')}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
