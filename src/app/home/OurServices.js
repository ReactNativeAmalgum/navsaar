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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8-nTqmNp1u68ZQlqdZHg5mUo2KU52GQDLg&s",
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
    <section className={`${styles.sectionBackground} ${styles.sectionWrapper}`}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={'heading2'}>12 demos</div>
          <div className={styles.demo__title2}>
            light & dark
            <br />
            styles
          </div>
        </div>

        <div className={styles.cardGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.cardColumn}>
              <div className={styles.card}>
                <div className={styles.thumbnailWrapper}>
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.thumbnailImage}
                  />
                </div>
                <div className={styles.cardTitle}>{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
