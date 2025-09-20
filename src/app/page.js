"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeContent from "./home/Home"; // <-- Renamed to avoid conflict
import { useEffect, useRef, useState } from "react";
import OurServices from "./home/OurServices";
import "./globals.css";
import Work from "./home/Work";
import Footer from "./components/Footer";
export default function HomePage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0); // <-- useRef instead of useReducer

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ flexGrow: 1, height: "100%" }}>
      <Navbar hidden={hidden} setHidden={setHidden} />
      <HomeContent />
      <OurServices />
      <Work />
      <Footer />
    </section>
  );
}
