"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

  // Group testimonials in chunks of 2
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section
      ref={sectionRef}
      className={`text-white position-relative section_padding
        ${styles.testimonialSection}
        `}
    >
      <div className="container position-relative">
        {/* Title and Custom Buttons */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-white">Loved from clients</h2>
          <div>
            <button
              className="btn btn-outline-dark me-2"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              ← Prev
            </button>
            <button
              className="btn btn-outline-dark"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Bootstrap Carousel */}
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            {groupedTestimonials.map((group, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <div className="row justify-content-center">
                  {group.map((test, subIdx) => (
                    <div
                      className={`col-md-6 mb-3 ${styles.testimonialItem}`}
                      key={subIdx}
                    >
                      <div
                        style={{ height: 250 }}
                        className={`p-4 bg-white text-dark rounded shadow text-start ${styles.testimonialCard}`}
                      >
                        <p className="mb-3">{test.quote}</p>
                        <div className="d-flex align-items-center">
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
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              fill="currentColor"
                              stroke="none"
                              strokeWidth="1"
                              fillRule="nonzero"
                            >
                              <title>quote</title>
                              <desc>Created with Sketch.</desc>
                              <g>
                                <polygon points="0 103.800162 36.5 103.800162 12.1664766 173 48.6664766 173 73 103.800162 73 0 0 0"></polygon>
                                <polygon points="98 0 98 103.800162 134.5 103.800162 110.166477 173 146.666477 173 171 103.800162 171 0"></polygon>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
