"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/ZoomImage.module.css";

export default function ZoomImage({ hidden, setHidden }) {
  const [animate, setAnimate] = useState(false);
  const lastScrollY = useRef(0);
  const [transform, setTransform] = useState({ scale: 1, rotate: 0 });

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section is in viewport, calculate zoom/rotate
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.top / windowHeight; // 0 to 1
        const scale = 1 + scrollProgress * 0.2; // Scale from 1 to 1.2
        const rotate = scrollProgress * 5; // Rotate up to 5 degrees

        setTransform({ scale, rotate });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.container} ${
        hidden ? styles.zoomHidden : styles.zoomVisible
      }`}
    >
      {" "}
      <div
        className={`zoom-image-container container-fluid`}
        style={{ width: "100%" }}
      >
        <div
          className={`${styles.background1} ${animate ? styles.animate1 : ""}`}
        />
        <div
          className={`${styles.background2} ${animate ? styles.animate2 : ""}`}
        >
          <img
            src="/zoom2.png"
            alt="Mountain"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className={`${animate ? styles.animate2 : ""}`}
          />
        </div>
        <div className={`${styles.content}`}>
<span className={styles.title}>
  <span>Hello from Navsaar</span>
</span>
          <span className={styles.heading}>
            Architecture <br />
            Studio{" "}
          </span>
          <span className={styles.paragraph}>
            Design to attract, convert and delight your customers
          </span>
        </div>
      </div>
    </div>
  );
}
