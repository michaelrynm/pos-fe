"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out",
        scrolled ? "top-0" : "top-6",
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center gap-8 px-10 py-4 transition-all duration-300 ease-in-out font-semibold",
          scrolled
            ? "w-full max-w-none rounded-none bg-white shadow-lg"
            : "max-w-2xl rounded-full bg-white shadow-lg",
        )}
      >
        <a href="#" className="hover:text-[#22333B] transition-colors duration-500">
          Home
        </a>
        <a href="#" className="hover:text-[#22333B] transition-colors duration-500">
          About us
        </a>
        <a href="#" className="hover:text-[#22333B] transition-colors duration-500">
          Services
        </a>
        <a href="#" className="hover:text-[#22333B] transition-colors duration-500">
          Store
        </a>
        <a href="#" className="hover:text-[#22333B] transition-colors duration-500">
          Contact us
        </a>
      </div>
    </div>
  );
}
