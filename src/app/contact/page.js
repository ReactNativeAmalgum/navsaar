// components/contact.js
"use client";

import styles from "@/styles/components/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // ✅ works now
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Something went wrong");
      } else {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // ✅ fixed
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.58834151806167!2d72.91962387191766!3d19.13337043722305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766639639042!5m2!1sen!2sin"
          className={styles.mapIframe}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
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

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required

              />

              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required

              />
            </div>

            <textarea
              className={styles.textarea}
              name="message"
              maxLength={500}
              placeholder="Here goes your message"
              value={formData.message}
              onChange={handleChange}
              required

            />

            <button
              type="submit"
              className={styles.sendBtn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
