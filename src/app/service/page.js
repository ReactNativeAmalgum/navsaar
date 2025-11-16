"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import styles from "../../styles/components/service.module.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [blur, setBlur] = useState(0);
  const swiperRef = useRef(null);

  const slidesData = [
    {
      leftBox: {
        image: "/zoom.jpg",
        title: "Box Title 1",
        description: "This box is centered vertically in the column.",
      },
      rightBoxes: [
        {
          image: "/zoom2.png",
          title: "Inner Box 1",
          description: "First inner box stacked vertically.",
        },
        {
          image: "/service.jpg",
          title: "Inner Box 2",
          description: "Second inner box stacked below the first one.",
        },
      ],
    },
    {
      leftBox: {
        image: "/zoom3.jpg",
        title: "Box Title 2",
        description: "Updated left box content for next slide.",
      },
      rightBoxes: [
        {
          image: "/zoom4.png",
          title: "Inner Box 3",
          description: "Updated first right box content.",
        },
        {
          image: "/service2.jpg",
          title: "Inner Box 4",
          description: "Updated second right box content.",
        },
      ],
    },
    // Add more slides if needed
  ];

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

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <section className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.content} style={{ filter: `blur(${blur}px)` }}>
            <div className="container">
              <p className={styles.hello}>Our specialization</p>
              <h1 className={styles.title}>Best solutions for your building</h1>
              <p className={styles.description}>
                Always happy, enthusiastic and creative, is something to talk
                about Arquito’s Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Design & Planning Section ===== */}
      <section className="container section_padding">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <h1>Design & Planning</h1>
            <p className="align-self-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p className="align-self-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p className="align-self-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p className="align-self-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
          </div>

          {/* Right Column - Content Carousel */}
          <div className="col-md-6 mt-5 mt-md-0">
            {/* Navigation Buttons */}
            <div className="d-flex g-3 " style={{gap:30}}>
              {/* Absolute Navigation Buttons */}
              <button id="prevBtn" className="btn btn-outline-dark align-self-start rounded-circle w-40 h-45 prev-btn">
                &larr;
              </button>
              <button id="nextBtn" className="btn btn-outline-dark align-self-start rounded-circle w-40 h-45 next-btn">
                &rarr;
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: "#prevBtn",
                nextEl: "#nextBtn",
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={30}
              slidesPerView={1}
              style={{ minHeight: "500px" }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="row g-5" style={{ height: "100%" }}>
                    {/* Left Box */}
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      {/* Buttons above the box */}

                      {/* Left Box */}
                      <div className="custom-box-1">
                        <Image
                          src={slide.leftBox.image}
                          alt={slide.leftBox.title}
                          // // layout="fill"
                          objectFit="cover"
                          className="custom-box-img"
                        />
                        <div className="custom-box-content">
                          <h4 className="mb-3">{slide.leftBox.title}</h4>
                          <p>{slide.leftBox.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Two Stacked Boxes */}
                    <div className="col-6">
                      <div className="row g-5">
                        {slide.rightBoxes.map((box, i) => (
                          <div className="col-12" key={i}>
                            <div className="custom-box">
                              <Image
                                src={box.image}
                                alt={box.title}
                                // layout="fill"
                                objectFit="cover"
                                className="custom-box-img"
                              />
                              <div className="custom-box-content">
                                <h4 className="mb-3 text-light">{box.title}</h4>
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
                    className="position-relative text-white rounded overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.leftBox.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "400px",
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 p-4 d-flex flex-column justify-content-between">
                      <div>
                        <p className="fw-semibold mb-1">{index + 1}</p>
                        <h4 className="fw-bold">{item.leftBox.title}</h4>
                        <p className="small">{item.leftBox.description}</p>
                      </div>
                      <button className="btn btn-outline-light align-self-start rounded-circle w-40 h-40">
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

      <style jsx global>{`
        .customContainer {
          background-color: green;
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
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
