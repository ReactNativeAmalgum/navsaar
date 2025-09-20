"use client";

import Image from "next/image";
import styles from "../../styles/components/Work.module.css";

const projects = [
  {
    id: 1,
    title: "Google",
    thumbnailUrl:
      "https://cdn.home-designing.com/wp-content/uploads/2014/01/Black-L-shaped-sofa.jpeg",
  },
  {
    id: 2,
    title: "Apple",
    thumbnailUrl:
      "https://cdn.home-designing.com/wp-content/uploads/2014/01/Black-white-dining-lounge.jpeg",
  },
  {
    id: 3,
    title: "Amazon",
    thumbnailUrl:
      "https://cdn.home-designing.com/wp-content/uploads/2014/01/Contemporary-bathroom-decor.jpeg",
  },
  {
    id: 4,
    title: "Next.js",
    thumbnailUrl: "https://cdn.home-designing.com/wp-content/uploads/2014/01/Home-office-desk.jpeg",
  },
  {
    id: 5,
    title: "Microsoft",
    thumbnailUrl:
      "https://cdn.home-designing.com/wp-content/uploads/2014/01/Dining-room-600x433.jpeg",
  },
  {
    id: 6,
    title: "Tesla",
    thumbnailUrl:
      "https://cdn.home-designing.com/wp-content/uploads/2014/01/Kitchen-diner-design.jpeg",
  },
];

export default function Work() {
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
              Works
            </div>
            <div
              className={`${styles.demo__title2}`}
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
              }}
            >
              Stunning &amp; Unique
              <br />
              Desing
            </div>
          </div>
        </div>
        <div className={`row ${styles.padding30}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`col-md-3 col-sm-6 py-3 ${styles.bgStyle}`}
            >
              <div
                className={`card text-center mx-auto border-0 `}
                style={{
                  height: "400px",
                  width: "400px",
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
