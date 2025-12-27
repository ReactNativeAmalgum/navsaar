// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import styles from "@/styles/components/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company */}
        <div className={styles.column}>
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/service/design-consultation">Services</Link>
            </li>
          </ul>
        </div>

        {/* Help Center */}
        <div className={styles.column}>
          <h5>Help Center</h5>
          <ul>
            {/* <li><Link href="/faqs">FAQs</Link></li> */}
            <li>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            {/* <li><Link href="/how-it-works">How It Works</Link></li> */}
            {/* <li><Link href="/returns">Return</Link></li> */}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className={styles.column}>
          <h5>Get In Touch</h5>
          <p>No. 971 Navsaar Studio</p>
          <p>IIT Market, Powai, Mumbai - 76</p>
          <p>navsar@gamil.com</p>
          <p>(+91) 9967314412</p>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image
              src="/Navsaar Studios.png"
              alt="Navsaar Studios Logo"
              width={150}
              height={50}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>
          © 2025 <span className={styles.bold}>NAVSAAR</span>. All Rights
          Reserved. Design by <span className={styles.bold}>Mukund Sharma</span>
        </p>
        <div className={styles.socials}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <SiBehance />
          </a>
          <a href="#">
            <FaGooglePlusG />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
