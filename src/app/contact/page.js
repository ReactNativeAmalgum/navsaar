// components/contact.js
"use client";

import styles from "@/styles/components/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2573617325654!2d-73.98565158461022!3d40.74844007932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259654d008d7b%3A0x7d6f55416b9b39d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678822601934!5m2!1sen!2sus"
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
            <span className={styles.city}>New York,</span>{" "}
            <span className={styles.country}>United States</span>
          </h2>
          <p>
            No. 166 Main Street, Beverly Hills <br /> CA, 90210
          </p>
          <p>
            +0085 346 2188 <br /> infor@arquito.com
          </p>
          <a href="#" className={styles.mapLink}>
            Map Direction
          </a>
        </div>

        <div className={styles.info}>
          <h4>GET IN TOUCH</h4>
          <form className={styles.form} >
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
            >
              </textarea>
            <button type="submit" className={styles.sendBtn}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
