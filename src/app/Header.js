"use client";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/menu-nav-logo-1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const involvedDropdownRef = useRef(null);
  const programDropdownRef = useRef(null);
  const tribeDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        involvedDropdownRef.current &&
        !involvedDropdownRef.current.contains(event.target) &&
        programDropdownRef.current &&
        !programDropdownRef.current.contains(event.target) &&
        tribeDropdownRef.current &&
        !tribeDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  return (
    <header
      className={`fixed  top-0 z-50 font-calibri  flex justify-between uppercase   items-center w-full h-[97px] transition-colors duration-300 ${
        isScrolled ? "bg-[#14bde3]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-[93px] pt-[px] font-bold">
        <Link href="/">
          <Image src={logo} width={80} height={86} alt="Logo" />
        </Link>
        <div className="flex space-x-2 gap-8 items-center font-semibold text-white cursor-pointer">
          <Link href="/">Home</Link>
          <Link href="/mandate">Our Mandate</Link>

          <div
            className="relative"
            ref={programDropdownRef}
            onMouseEnter={() => handleMouseEnter("program")}
          >
            <div className="text-white">
              <Link href="/programs">PROGRAMS</Link>
            </div>
            <div
              className={`absolute left-0 top-full mt-2 w-[213px] border border-[#006991] bg-[#FFF] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "program"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
              <Link href="/programs#art" className="dropdown-item">
                ARTS
              </Link>
              <Link href="/programs#leadership" className="dropdown-item">
                LEADERSHIP
              </Link>
              <Link href="/programs#entreprenuership" className="dropdown-item">
                ENTREPRENEURSHIP
              </Link>
              <Link href="/programs#food" className="dropdown-item">
                FOOD SHELTER
              </Link>
              <Link href="/programs#training" className="dropdown-item">
                SDG AWARENESS
              </Link>
            </div>
          </div>

          <div
            className="relative"
            ref={tribeDropdownRef}
            onMouseEnter={() => handleMouseEnter("tribe")}
          >
            <div className="text-white">
              <Link className="" href="/tribepage">
                OUR TRIBE
              </Link>
            </div>
            <div
              className={`absolute left-0 top-full mt-2 w-[213px] border border-[#006991] bg-[#FFF] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "tribe"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
              <Link href="/board" className="dropdown-item">
                BOARD OF DIRECTORS
              </Link>
              <Link href="/board#advisory" className="dropdown-item">
                ADVISORY BOARD
              </Link>
              <Link href="/volunteer#developer" className="dropdown-item">
                DEVELOPMENT TEAM
              </Link>
              <Link href="/council" className="dropdown-item">
                ADVISORY COUNCIL
              </Link>
            </div>
          </div>

          <Link href="/news">News</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>

          <div
            className="relative"
            ref={involvedDropdownRef}
            onMouseEnter={() => handleMouseEnter("involved")}
          >
            <div className="text-white items-center flex gap-1">
              <Link href="/involved">GET INVOLVED</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="white"
                  stroke-width="1.5"
                  stroke="white"
                  className="w-8 h-8"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </span>
            </div>
            <div
              className={`absolute left-0 top-6 mt-2 w-[213px]  border border-[#006991] bg-[#ffff] z-50 transition-all duration-1000 ease-in-out ${
                openDropdown === "involved"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
              <Link href="/sponsor" className="dropdown-item">
                AS A SPONSOR
              </Link>
              <Link href="/partner" className="dropdown-item">
                AS A PARTNER
              </Link>
              <Link href="/mentor" className="dropdown-item">
                AS A MENTOR
              </Link>
              <Link href="/volunteer" className="dropdown-item">
                AS VOLUNTEER
              </Link>
            </div>
          </div>
          <Link href="/">Language</Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <button className="bg-[#00A859] px-[28px] py-2 rounded-[31px] uppercase  text-white text-center font-calibri">
          Donate
        </button>
      </div>
    </header>
  );
}

export default Header;
