"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/components/Navbar.module.css";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbarContainer} fixed-top px-5`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link href="/" className={styles.navbarBrand}>
            Navsaar
          </Link>

          {/* Burger menu (turns into cross when open) */}
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

          {/* Desktop navigation */}
          <ul className={styles.desktopNavLinks}>
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className={styles.navItem}>
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

      {/* Sidebar */}
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
    </>
  );
}
