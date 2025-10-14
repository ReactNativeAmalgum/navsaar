"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/components/OurServices3.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CountUp from "react-countup";

export default function OurServices3() {
  const cards = [
    {
      title: "ARCHITECTURE AND INDUSTRY",
      description: "Building architectures with modern technology.",
      iconClass: "lnr lnr-apartment",
    },
    {
      title: "INTERIOR DESIGN",
      description: "Bring the beautifully for your house. Just enjoy!",
      iconClass: "lnr lnr-home",
    },
    {
      title: "LANDSCAPE & GARDEN DESIGN",
      description: "Bring nature in your house. Health is important.",
      iconClass: "lnr lnr-leaf",
    },
    {
      title: "CONSULTING AND RENOVATION",
      description: "Consulting solutions and make plan to renovation.",
      iconClass: "lnr lnr-bubble",
    },
    {
      title: "STUDIO RENOVATION",
      description: "Consulting solutions and make plan to renovation.",
      iconClass: "lnr lnr-pencil",
    },
  ];

  const stats = [
    { number: 12000, label: "Partner Worldwide" },
    { number: 4620, label: "Employees and Staffs" },
    { number: 2750, label: "Project Completed" },
  ];

  return (
    <div className="container section_padding">
      {/* Section Title */}
      <div className="left-cont mb-5">
        <h2 className="label fw-bold text-uppercase">Our Services</h2>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        className={styles.mySwiper}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-4 border d-flex flex-column justify-content-between align-items-start h-100 ${
                card.active ? "bg-danger text-white" : "bg-white"
              }`}
              style={{
                minHeight: "300px",
                height: "100%",
                width: "100%",
              }}
            >
              <div>
                <h6
                  className="fw-bold text-uppercase mb-3"
                  style={{ fontSize: "16px", lineHeight: "1.4" }}
                >
                  {card.title}
                </h6>
                <p
                  className={`mb-4 small ${
                    card.active ? "text-white-50" : "text-muted"
                  }`}
                  style={{ fontSize: "14px" }}
                >
                  {card.description}
                </p>
              </div>

              <div className="mt-auto">
                <i className={`${card.iconClass}`} style={{ fontSize: "42px", color:'#f24a00' }}></i>
                <p
                  className={`mt-3 fw-bold text-uppercase ${
                    card.active ? "text-white" : "text-dark"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  More
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats Divider */}
      <div className={`${styles.counterSection}`}>
        <div className={`${styles.borderLine}`} />
      </div>

      {/* Stats Section */}
      <div className="row text-center">
        {stats.map((stat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <span
              className="fw-regular"
              style={{ fontSize: "72px", fontFamily: "var(--font-teko)" }}
            >
              <CountUp end={stat.number} duration={2} separator="," />
            </span>
            <p
              className="text-uppercase text-muted"
              style={{ fontSize: "13px", letterSpacing: "0.5px" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
