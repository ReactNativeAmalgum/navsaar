// components/ZoomImage.js
import { useEffect, useState } from "react";
import styles from "../../styles/components/ZoomImage.module.css";

export default function ZoomImage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div
      className={`${styles.bgImage} ${animate ? styles.animate : ""}`}
    ></div>
  );
}
