// components/Footer.tsx
"use client";

import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import styles from "@/styles/components/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company */}
        <div className={styles.column}>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Help Center */}
        <div className={styles.column}>
          <h5>Help Center</h5>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Return</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className={styles.column}>
          <h5>Get In Touch</h5>
          <p>17 Princess Road, London, Greater London</p>
          <p>NW18JR, United Kingdom</p>
          <p>hello@arquito.uk</p>
          <p>(+0084) 912-3548-073</p>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <h5>Newsletter</h5>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">SUBSCRIBE ➝</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>
          © 2025 <span className={styles.bold}>NAVSAAR</span>. All Rights Reserved. 
          Design by <span className={styles.bold}>Mukund Sharma</span>
        </p>
        <div className={styles.socials}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><SiBehance /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
