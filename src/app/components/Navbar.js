"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../../styles/components/navbar.css";
import { Router } from "next/router";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // NEW: tracks animation
  const lastScrollY = useRef(0);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      // closing
      setIsAnimating(true);
      setSidebarOpen(true);
      setTimeout(() => {
        setSidebarOpen(false);
        setIsAnimating(false);
      }, 400); // matches CSS transition time
    } else {
      // opening
      setSidebarOpen(true);
    }
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setSidebarOpen(false);
        setIsAnimating(false);
      }, 400);
    }
  };

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = sidebarOpen || isAnimating;

  return (
    <nav
      className={`navbarContainer navbar navbar-expand-lg fixed-top transition-navbar px-5 ${
        hidden ? "navbar-hidden" : ""
      }`}
    >
      <div className="container-fluid logo-container">
        <Link href="/" className="navbar-brand">
          Navsaar
        </Link>

        {/* Burger Toggle */}
        <div
          className={`vlt-menu-burger ${
            sidebarOpen ? "vlt-menu-burger--hide" : ""
          }`}
          onClick={toggleSidebar}
          aria-label="Toggle navigation"
        >
          <span className="line line-one"></span>
          <span className="line line-two"></span>
          <span className="line line-three"></span>
        </div>

        {/* Sidebar */}

        <div
          className={`nav-links-container sidebar-modal ${
            sidebarOpen && !isAnimating ? "open" : "closing"
          }`}
          id="navbarNav"
        >
          <div className="sidebar-header">
            <div
              className={`vlt-menu-burger ${
                sidebarOpen ? "vlt-menu-burger--opened" : ""
              }`}
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <span className="line line-one"></span>
              <span className="line line-two"></span>
              <span className="line line-three"></span>
            </div>
          </div>

          <ul className="navbar-nav d-flex justify-content-center custom-align w-100">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li
                key={index}
                style={{ animationDelay: `${index * 0.15}s ` }} // staggered delay
                className={`nav-item ${
                  sidebarOpen ? "nav-item-show" : "nav-item-hide"
                }`}
              >
                {" "}
                <Link
                  href={`${
                    item.toLowerCase() === "home"
                      ? "#"
                      : `/${item.toLowerCase()}`
                  }`}
                  className={`nav-link ${
                    Router.pathname === `/${item.toLowerCase()}` ? "active" : ""
                  }`}
                  onClick={closeSidebar}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Backdrop */}
        {isVisible && (
          <div
            className={`backdrop ${sidebarOpen ? "show" : ""}`}
            onClick={closeSidebar}
          ></div>
        )}
      </div>
    </nav>
  );
}
