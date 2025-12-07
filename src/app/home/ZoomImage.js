"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/ZoomImage.module.css";

export default function ZoomImage({ hidden, setHidden }) {
  const [animate, setAnimate] = useState(false);
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const [manualScroll, setManualScroll] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 768;

  // Helper to lock/unlock body scroll

  const toggleBodyScroll = (lock) => {
    if (isMobile()) return; // ✅ never lock scroll on phones

    if (typeof document !== "undefined") {
      document.body.style.overflow = lock ? "hidden" : "";
    }
  };

  useEffect(() => {
    setAnimate(true);

    // ✅ DO NOT LOCK SCROLL ON MOBILE PHONES
    if (window.innerWidth > 768) {
      toggleBodyScroll(true);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const background1 = section.querySelector(`.${styles.background1}`);
      const background2 = section.querySelector(`.${styles.background2}`);

      if (!background1 || !background2) return;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
        );

        let scale;

        if (progress < 0.5) {
          scale = 2.5 - (progress / 0.5) * 1.5;

          if (!isMobile()) {
            setScrollLocked(true);
            toggleBodyScroll(true);
          }
        } else {
          scale = 1 + ((progress - 0.5) / 0.5) * 0.5;

          setScrollLocked(false);
          toggleBodyScroll(false);
        }

        background1.style.transform = `scale(${scale})`;
        background2.style.transform = `scale(${scale})`;
        background1.style.opacity = "1";
        background2.style.opacity = "1";

        setAnimate(true);
        setHidden(false);
      } else {
        setAnimate(false);
        setHidden(true);
        toggleBodyScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      toggleBodyScroll(false);
    };
  }, []);

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
