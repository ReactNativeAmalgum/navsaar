"use client";

import Image from "next/image";
import styles from "../../styles/components/OurServices.module.css";

const projects = [
  {
    id: 1,
    title: "Google",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    id: 2,
    title: "Apple",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    title: "Amazon",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1595526114031-8d8b1023f2b5",
  },
  {
    id: 4,
    title: "Next.js",
    thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 5,
    title: "Microsoft",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 6,
    title: "Tesla",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

export default function OurServices() {
  return (
    <section
      className={`d-flex align-items-center justify-content-center  ${styles.sectionBackground} section_padding`}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="container-fluid"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <div className="d-flex text-center mb-5">
          <div
            style={{
              margin: "50px 0px 40px 300px",
              flexDirection: "row",
              gap: 30,
              display: "flex",
            }}
          >
            <div
              className={`${styles.demo__title}`}
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
              }}
            >
              12 demos
            </div>
            <div
              className={`${styles.demo__title2}`}
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
              }}
            >
              light &amp; dark
              <br />
              styles
            </div>
          </div>
        </div>
        <div className={`row ${styles.padding30}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`col-md-4 col-sm-6 py-3 ${styles.bgStyle}`}
            >
              <div
                className={`card text-center mx-auto border-0 `}
                style={{
                  height: "450px",
                  width: "90%",
                  backgroundColor: "transparent",
                }}
              >
                {/* Website Thumbnail Preview */}
                <div
                  className={`overflow-hidden ${styles.innerCardBody} ${styles.cardShadow}`}
                  style={{
                    flexGrow: 1,
                    height: "90%",
                    position: "relative",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className={styles.thumbnailWrapper}>
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className={styles.thumbnailImage}
                    />
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="text-start pt-4">
                  <span className={`${styles.card_title}`}>
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
