"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/components/Navbar.module.css";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  // ✅ Services (match with your ServiceDetailPage)
  const serviceItems = {
    "Design & Planning": "design-planning",
    "Interior Design": "interior-design",
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  // ✅ Dropdown hover show/hide logic
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    const menu = dropdown.querySelector(".dropdown-menu");
    let hoverTimeout;

    const showMenu = () => {
      clearTimeout(hoverTimeout);
      menu.classList.add("show");
    };

    const hideMenu = () => {
      hoverTimeout = setTimeout(() => {
        menu.classList.remove("show");
      }, 200);
    };

    dropdown.addEventListener("mouseenter", showMenu);
    dropdown.addEventListener("mouseleave", hideMenu);
    menu.addEventListener("mouseenter", showMenu);
    menu.addEventListener("mouseleave", hideMenu);

    return () => {
      dropdown.removeEventListener("mouseenter", showMenu);
      dropdown.removeEventListener("mouseleave", hideMenu);
      menu.removeEventListener("mouseenter", showMenu);
      menu.removeEventListener("mouseleave", hideMenu);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbarContainer} fixed-top px-5`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Link href="/" className={styles.navbarBrand}>
            Navsaar
          </Link>

          {/* Burger menu */}
          <div
            className={`${styles.burger} ${
              sidebarOpen ? styles.burgerOpen : ""
            }`}
            onClick={toggleSidebar}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>

          {/* Desktop Navigation */}
          <ul className={`${styles.desktopNavLinks} d-flex align-items-center`}>
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;

              if (label === "Services") {
                return (
                  <li
                    key={href}
                    ref={dropdownRef}
                    className={`nav-item dropdown position-relative ${styles.navItem}`}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${styles.navLink} ${
                        isActive ? styles.activeLink : ""
                      }`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {label}
                    </a>

                    {/* ✅ Services Dropdown */}
                    <ul className="dropdown-menu border-0 shadow-sm mt-2 show-on-hover">
                      {Object.entries(serviceItems).map(([title, slug], i) => (
                        <li key={i}>
                          <Link
                            href={`/service/${slug}`}
                            className="dropdown-item service-dropdown-item"
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={href} className={`${styles.navItem} nav-item`}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeLink : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`${styles.sidebarModal} ${
          sidebarOpen ? styles.open : styles.closed
        }`}
      >
        <ul className={styles.sidebarNavLinks}>
          {navItems.map(({ label, href }) => (
            <li key={href} className={styles.navItem}>
              <Link
                href={href}
                className={`${styles.navLink} ${
                  pathname === href ? styles.activeLink : ""
                }`}
                onClick={closeSidebar}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div className={styles.backdrop} onClick={closeSidebar}></div>
      )}

      {/* ✅ Orange Hover Effect for Dropdown */}
      <style jsx global>{`
        .dropdown-menu {
          transition: all 0.2s ease;
        }
        .dropdown-item.service-dropdown-item:hover {
          color: orange !important;
          background-color: transparent !important;
        }
      `}</style>
    </>
  );
}

