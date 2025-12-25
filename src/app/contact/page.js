// components/contact.js
"use client";

import styles from "@/styles/components/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.58834151806167!2d72.91962387191766!3d19.13337043722305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766639639042!5m2!1sen!2sin"
          aria-hidden="false"
          tabIndex="0"
          className={styles.mapIframe}
          // Added attributes for better performance and a smoother user experience.
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={`container section_padding ${styles.container}`}>
        <div className={styles.info}>
          <h4>INFORMATION</h4>
          <h2>
            <span className={styles.city}>Powai,</span>{" "}
            <span className={styles.country}>Mumbai</span>
          </h2>
          <p>
            No. 971 Navsaar Studio, IIT Market, Powai
            <br /> Mumbai - 76
          </p>
          <p>
            (+91) 9967314412 <br /> navsar@gamil.com
          </p>
          <a href="#" className={styles.mapLink}>
            Map Direction
          </a>
        </div>

        <div className={styles.info}>
          <h4>GET IN TOUCH</h4>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <input
                className={`${styles.input}`}
                type="text"
                placeholder="Name"
              />
              <input
                className={`${styles.input}`}
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              maxLength={500}
              className={`${styles.textarea} `}
              placeholder="Here goes your message"
            ></textarea>
            <button type="submit" className={styles.sendBtn}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
