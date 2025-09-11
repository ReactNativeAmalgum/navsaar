"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/ZoomImage.module.css";

export default function ZoomImage({ hidden, setHidden }) {
  const [animate, setAnimate] = useState(false);
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const [manualScroll, setManualScroll] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  // Helper to lock/unlock body scroll
  const toggleBodyScroll = (lock) => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = lock ? "hidden" : "";
    }
  };

  useEffect(() => {
    setAnimate(true);
    toggleBodyScroll(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const background1 = section.querySelector(`.${styles.background1}`);
      const background2 = section.querySelector(`.${styles.background2}`);

      if (!background1 || !background2) return;

      // Calculate scroll progress inside section (0 to 1)
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          )
        );

        // Scale range: zoom out from 2.5 to 1 during progress 0 → 0.5
        // After progress > 0.5, unlock scroll and scale normal 1 to 1.5 if scrolling more
        let scale;
        if (progress < 0.5) {
          // Zoom out from 2.5 → 1 (as progress goes 0 → 0.5)
          scale = 2.5 - (progress / 0.5) * 1.5;
          if (scrollLocked === false) setScrollLocked(true);
          toggleBodyScroll(true); // lock scroll while zooming
        } else {
          // Zoom normal 1 → 1.5 (progress 0.5 → 1)
          scale = 1 + ((progress - 0.5) / 0.5) * 0.5;

          if (scrollLocked) {
            setScrollLocked(false);
            toggleBodyScroll(false); // unlock scroll after zoom finishes
          }
        }

        background1.style.transform = `scale(${scale})`;
        background2.style.transform = `scale(${scale})`;
        background1.style.opacity = "1";
        background2.style.opacity = "1";

        // Show/hide based on visibility
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          setAnimate(true);
          setHidden(false);
        } else {
          setAnimate(false);
          setHidden(true);
        }
      } else {
        // Section out of view
        setAnimate(false);
        setHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      toggleBodyScroll(false); // unlock scroll on unmount just in case
    };
  }, [setHidden, scrollLocked]);

  return (
    <div
      className={`${styles.container} ${
        hidden ? styles.zoomHidden : styles.zoomVisible
      }`}
      ref={sectionRef}
      style={{ touchAction: scrollLocked ? "none" : "auto" }} // disable touch scroll if locked
    >
      <div
        className={`zoom-image-container container-fluid`}
        style={{ width: "100%" }}
      >
        <div
          className={`${styles.background1} ${
            animate ? (manualScroll ? styles.scrollZoom1 : styles.animate1) : ""
          }`}
        />
        <div
          className={`${styles.background2} ${
            animate ? (manualScroll ? styles.scrollZoom2 : styles.animate2) : ""
          }`}
        >
          <img
            src="/zoom2.png"
            alt="Mountain"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className={`${
              animate
                ? manualScroll
                  ? styles.scrollZoom2
                  : styles.animate2
                : ""
            }`}
          />
        </div>
        <div className={`${styles.content}`}>
          <span className={styles.title}>
            <span>Hello from Navsaar</span>
          </span>
          <span className={styles.heading}>
            <span>
              Architecture <br />
              Studio{" "}
            </span>
          </span>
          <span className={styles.paragraph}>
            <span>Design to attract, convert and delight your customers</span>
          </span>
        </div>
      </div>
    </div>
  );
}
