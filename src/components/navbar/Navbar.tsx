import React from 'react'
import Link from 'next/link'


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
    name: "Contact",
    href: "/contact",
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
    name: "Dashboard",
    href: "/dashboard",
  }
]
const Navbar = () => {
  return (
    <div>
      {Links.map((link) => (
        <Link key={link.id} href={link.href}>{link.name}</Link>
      ))}
      <div>
      </div>
    </div>
  )
}

export default Navbar