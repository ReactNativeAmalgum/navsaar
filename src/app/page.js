"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { useEffect, useReducer, useState } from "react";
import ZoomImage from "./components/ZoomImage";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useReducer(0);

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
      <ZoomImage hidden={hidden} setHidden={setHidden} />
      <div style={{ height: "50%", flexGrow: 1 }} className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">Welcome to Navsaar</h1>
            <p className="text-center">
              Your architecture studio for modern designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
