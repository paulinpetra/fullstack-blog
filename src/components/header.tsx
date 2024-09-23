"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//define the routes so I can map over them
const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Header() {
  const pathname = usePathname(); //hook for acessing URL pathname, the value returned will update dynamically when the URL changes
  //works only in client components
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png" //add remotePatterns in next config file
          alt="logo"
          className="w-[35px] h-[35px]"
          width="35" //need to be specified when using an external img
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-rose-100" : "text-white"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
