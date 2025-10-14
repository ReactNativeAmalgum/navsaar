"use client";
import React, { useState } from "react";
import styles from "../../styles/components/OurServices2.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import { Bounce, Slide } from "react-awesome-reveal";
import { ServiceData } from "../../utils/ServiceData";
import Image from "next/image";
import CountUp from "react-countup";

function OurServices2() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const stats = [
    { number: 12000, label: "Partner Worldwide" },
    { number: 4620, label: "Employees and Staffs" },
    { number: 2750, label: "Project Completed" },
  ];
  return (
    <section className={`section_padding ${styles.galleryCont}`}>
      <div className={styles.abtSliderCont}>
        <div className={`${styles.galleryCustomCont} container`}>
          <div className={`${styles.galleryCustomRow} row`}>
            <div className={`${styles.galleryCustomCol} col-3`}>
              <div className={styles.galleryCard}>
                <div className={"label"}>Our Services </div>
                <p className={styles.galleryCardText}>
                  Our services are designed to meet your unique needs, offering
                  personalized solutions that enhance your space and lifestyle.
                </p>

                {showMore && (
                  <p className={styles.galleryCardText}>
                    From concept to execution, we ensure quality, creativity,
                    and excellence in every project
                  </p>
                )}

                <button
                  className={styles.newAboutUsReadMore}
                  onClick={toggleShowMore}
                >
                  {showMore ? "read less" : "read more..."}
                </button>
              </div>
            </div>

            <div className={`cont-col9 ${styles.galleryCustomCol} col-9`}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={false}
                // modules={[FreeMode, Autoplay]}
                className={styles.mySwiper}
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  200: { slidesPerView: 1 },
                  320: { slidesPerView: 1 },
                  425: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                <SwiperSlide className={styles.sliderImgCont}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={ServiceData[0].img[0]}
                      alt="Interior Designer in Thane"
                      fill
                      style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <a
                      className={styles.imageCaption}
                      href="/designplanning/interior-design-planning-services-thane"
                    >
                      <Bounce>Design Planning</Bounce>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.sliderImgCont}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={ServiceData[1].img[0]}
                      alt="Interior Designer in Thane"
                      fill
                      style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <a
                      className={styles.imageCaption}
                      href="/designplanning/interior-design-planning-services-thane"
                    >
                      <Bounce>Design Planning</Bounce>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.sliderImgCont}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={ServiceData[2].img[0]}
                      alt="Interior Designer in Thane"
                      fill
                      style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <a
                      className={styles.imageCaption}
                      href="/designplanning/interior-design-planning-services-thane"
                    >
                      <Bounce>Design Planning</Bounce>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.sliderImgCont}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={ServiceData[3].img[0]}
                      alt="Interior Designer in Thane"
                      fill
                      style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <a
                      className={styles.imageCaption}
                      href="/designplanning/interior-design-planning-services-thane"
                    >
                      <Bounce>Design Planning</Bounce>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.sliderImgCont}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={ServiceData[4].img[0]}
                      alt="Interior Designer in Thane"
                      fill
                      style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <a
                      className={styles.imageCaption}
                      href="/designplanning/interior-design-planning-services-thane"
                    >
                      <Bounce>Design Planning</Bounce>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Stats Divider */}
            <div className={`${styles.counterSection}`}>
              <div className={`${styles.borderLine}`} />
            </div>
            <div className={`col-12 mt-5 mb-0 ${styles.statsSection}`}>
              <div className={`row text-center `}>
                {stats.map((stat, index) => (
                  <div className="col-md-4" key={index}>
                    <span
                      className="fw-regular"
                      style={{
                        fontSize: "72px",
                        fontFamily: "var(--font-teko)",
                      }}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices2;
