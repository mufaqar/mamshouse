import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="absolute top-0 right-0 w-full shadow-sm z-10 bg-white">
      <div className="flex justify-between px-2 md:px-8 items-center h-16 bg-white">
        {/* logo */}
        <div>
          <Link href="/">
            <h1 className="uppercase mt-[14px] font-bangla-mn text-xl md:text-2xl leading-7">
              mamshouse.
            </h1>
          </Link>
        </div>
        <nav className={`md:block ${isMobile ? "block" : "hidden"}`}>
          <ul
            className={`flex font-semibold text-sm gap-20 items-center ${
              isMobile &&
              "bg-white shadow-sm p-8 gap-8 absolute top-16 z-10 w-full left-0 flex-col"
            }`}
          >
            <li
              className={`cursor-pointer ${
                pathname === "/residences" && "nav_item"
              }`}
            >
              <Link href="/residences">Résidences</Link>
            </li>
            <li
              className={`cursor-pointer ${
                pathname === "/activities" && "nav_item"
              }`}
            >
              <Link href="/activities">Activités</Link>
            </li>
            <li
              className={`cursor-pointer ${
                pathname === "/contact" && "nav_item"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li className={`ml-6 cursor-pointer text-lg ${isMobile && "ml-0"}`}>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <Link href="/fr" locale='fr'>
              FR
            </Link> |
            <Link href="/en" locale='en'>
              EN
            </Link>
          </ul>
        </nav>
        {/* hamburger */}
        <div className="block md:hidden">
          {isMobile ? (
            <GrClose
              size={26}
              className="pt-1"
              onClick={() => setIsMobile(false)}
            />
          ) : (
            <FiMenu
              size={30}
              className="pt-1"
              onClick={() => setIsMobile(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
