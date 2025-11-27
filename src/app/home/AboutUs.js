// components/AboutUs.js
"use client";
import styles from "@/styles/components/About.module.css";

export default function AboutUs() {
  return (
    <section className={` section_padding ${styles.aboutSection}`}>
      <div className={`container ${styles.container}`}>
        {/* Left side: Experience Box */}
        <div className="col-lg-6 col-md-12 align-items-center d-flex justify-content-center">
          <div className={styles.imageWrapper}>
            <div className={styles.experienceBox}>
              <div className={styles.since}>
                SINCE
                <br />
                1991
              </div>
              <div className={styles.cutout}>
                <span className={styles.years}>25</span>
              </div>
              <div className={styles.experience}>
                YEARS
                <br />
                EXPERIENCE
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="col-lg-6 col-md-12 ">
          <div className={styles.textContent}>
            {/* <div className=""> */}
              <h2 className={"label"}>NAVSAAR STUDIO</h2>
            {/* </div> */}
            <h2 className={styles.heading}>Be The Architect and The Mason</h2>
            <p className={styles.description}>
              Arquito is a different kind of architecture practice. Founded by
              LoganCee in 1991, we’re an employee-owned firm pursuing a
              democratic design process that values everyone’s input.
            </p>
            <p className={styles.description}>
              Today we have more than 150 people in London, Hong Kong and Sydney
              providing architecture, interior and urban design services from
              concept to completion.
            </p>
            <a href="/about" className={styles.moreLink}>
              MORE ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
