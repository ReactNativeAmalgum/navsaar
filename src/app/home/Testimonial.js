"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/components/Testimonial.module.css";

const testimonials = [
  {
    name: "Edison Cavani",
    title: "Football Player at PSG",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "Fantastic experience. Would definitely work together again!",
  },
  {
    name: "Stevie Hoang",
    title: "Singer",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "Great collaboration. Professional and talented!",
  },
  {
    name: "Justin Theroux",
    title: "Architect",
    image: "https://i.pravatar.cc/150?img=7",
    quote: "Very reliable and creative. Highly recommended.",
  },
  {
    name: "Jane Doe",
    title: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=15",
    quote: "A pleasure to work with. Excellent communication.",
  },
  {
    name: "John Smith",
    title: "Tech CEO",
    image: "https://i.pravatar.cc/150?img=18",
    quote: "Top-notch service and results.",
  },
];

export default function TestimonialCarousel() {
  const sectionRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        sectionRef.current.classList.add("in-view");
      } else {
        sectionRef.current.classList.remove("in-view");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  return (
    <section
      ref={sectionRef}
      className={`text-dark position-relative section_padding ${styles.testimonialSection}`}
    >
      <div className="container position-relative">
        {/* Title */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
              <h2 className="label">Love from our clients</h2>
          {/* Custom Prev / Next Buttons */}
          <div className="d-flex">
            <button
              ref={prevRef}
              className="btn btn-outline-dark me-2"
              type="button"
            >
              ← Prev
            </button>
            <button
              ref={nextRef}
              className="btn btn-outline-dark"
              type="button"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="position-relative">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-5"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx} className="d-flex justify-content-center">
                <div className={`p-4 ${styles.testimonialCard}`}>
                  <p className="mb-3">{test.quote}</p>
                  <div className="d-flex align-items-center mt-auto">
                    <Image
                      src={test.image}
                      alt={test.name}
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold">{test.name}</h6>
                      <small className="text-muted">{test.title}</small>
                    </div>

                    <div
                      className="ms-auto"
                      style={{ width: 40, height: 40, color: "#dc3545" }}
                    >
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 171 173"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <polygon points="0 103.800162 36.5 103.800162 12.1664766 173 48.6664766 173 73 103.800162 73 0 0 0"></polygon>
                        <polygon points="98 0 98 103.800162 134.5 103.800162 110.166477 173 146.666477 173 171 103.800162 171 0"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
