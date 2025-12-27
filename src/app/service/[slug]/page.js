"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/components/Service.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { servicesData2, slidesData } from "@/utils/ServiceData";
import { useRouter } from "next/navigation";



export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData2[slug];
  const [blur, setBlur] = useState(0);
  const swiperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxBlur = 10;
      const bannerHeight = window.innerHeight;
      const blurValue = Math.min((scrollTop / bannerHeight) * maxBlur, maxBlur);
      setBlur(blurValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="container py-5">
        <h1>Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.content} style={{ filter: `blur(${blur}px)` }}>
            <div className="container">
              <p className={styles.hello}>{service.banner.subtitle}</p>
              <h1 className={styles.title}>{service.banner.title}</h1>
              <p className={styles.description}>{service.banner.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="container section_padding">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1>{service.banner.title}</h1>
            <ul className="mt-5">
              {service.content.map((text, idx) => (
                <li key={idx}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Swiper Section */}
          <div className="col-lg-6 col-md-12 mt-5 mt-md-0">
            <div className="d-flex g-3" style={{ gap: 30 }}>
              <button
                id="prevBtn"
                className="btn btn-outline-dark rounded-circle prev-btn"
              >
                &larr;
              </button>
              <button
                id="nextBtn"
                className="btn btn-outline-dark rounded-circle next-btn"
              >
                &rarr;
              </button>
            </div>

            <div className={styles.swiperContainer}>
              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                style={{ minHeight: "500px" }}
                breakpoints={{
                  0: {
                    spaceBetween: 0, // 👈 no space on small screens
                  },
                  425: {
                    spaceBetween: 0, // 👈 normal spacing above 480px
                  },
                }}
              >
                {service.slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.customBoxRow}>
                      {/* Left Box */}
                      <div className={styles.leftBoxCol}>
                        <div className="custom-box-1">
                          <Image
                            src={slide.leftBox.image}
                            alt={slide.leftBox.title}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="custom-box-content">
                            <h4>{slide.leftBox.title}</h4>
                            <p>{slide.leftBox.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Stacked Boxes */}
                      <div className={styles.rightBoxCol}>
                        <div className="row g-5">
                          {slide.rightBoxes.map((box, i) => (
                            <div className="col-12" key={i}>
                              <div className="custom-box">
                                <Image
                                  src={box.image}
                                  alt={box.title}
                                  layout="fill"
                                  objectFit="cover"
                                />
                                <div className="custom-box-content">
                                  <h4>{box.title}</h4>
                                  <p>{box.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="py-5 bg-light section_padding">
        <div className="container">
          <h2 className="label">Our services</h2>
          <div className="mt-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {slidesData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`position-relative text-white rounded overflow-hidden `}
                    style={{
                      backgroundImage: `url(${item.leftBox.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "400px",
                      backgroundColor: "green",
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 p-4 d-flex flex-column justify-content-between">
                      <div>
                        <p className="fw-semibold mb-1">{index + 1}</p>
                        <h4 className="fw-bold">{item.leftBox.title}</h4>
                        <p className="small">{item.leftBox.description}</p>
                      </div>
                      <button
                        onClick={() => router.push(item.link)}
                        className="btn btn-outline-light align-self-start rounded-circle w-40 h-40"
                      >
                        <span className="fs-5">&#10132;</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* === STYLES FROM REFERENCE FILE === */}
      <style jsx global>{`
        .custom-box-1 {
          position: relative;
          height: 420px;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-box {
          position: relative;
          height: 300px;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-box-img {
          z-index: 1;
        }

        .custom-box-content {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          color: white;
          text-align: center;
          background: rgba(0, 0, 0, 0.35);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
