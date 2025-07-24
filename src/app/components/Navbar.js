"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../../styles/components/navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  console.log(" Navbar rendered", lastScrollY);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      console.log(" currentScrollY scrolled", currentScrollY);
      console.log(" lastScrollY scrolled", lastScrollY.current);

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down — hide navbar
        setHidden(true);
      } else {
        // Scrolling up — show navbar
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbarContainer navbar navbar-expand-lg fixed-top transition-navbar  ${
        hidden ? "navbar-hidden" : ""
      }`}
    >
      <div className="container-fluid logo-container">
        <Link href="/" className="navbar-brand">
          Navsaar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-links-container" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
