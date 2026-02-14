"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setScrolled(currentScrollY > 40);
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mt-6 flex items-center gap-8 px-8 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-neutral-900/80 backdrop-blur-xl border-neutral-800 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          href="#projects"
          className="text-sm text-neutral-300 hover:text-white transition"
        >
          Projects
        </Link>

        <Link
          href="#skills"
          className="text-sm text-neutral-300 hover:text-white transition"
        >
          Skills
        </Link>

        <Link
          href="#contact"
          className="text-sm text-neutral-300 hover:text-white transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
