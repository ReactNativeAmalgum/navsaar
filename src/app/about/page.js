"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "@/styles/components/Aboutus.module.css";
import React from "react";
import { Accordion } from "react-bootstrap";
import Image from "next/image";

export default function Page() {
  const [activeKey, setActiveKey] = React.useState("0");

  const specializations = [
    {
      id: "01",
      title: "Architecture",
      description:
        "As architects, we know that each day is new and must be explored. People’s dreams about how they want to live their lives, how they pursue inspiration and education.",
      image: "/images/architecture.jpg",
    },
    {
      id: "02",
      title: "Interior Design",
      description:
        "These buildings give architecture, art, culture, history, and nature the opportunity to meet. We see this as an invitation to let the architecture vibrate with artistic audacity, life, and joy.",
      image: "/images/interior.jpg",
    },
    {
      id: "03",
      title: "Landscape",
      description:
        "We design master plans and urban spaces full of life, always resting on the shoulders of the local culture and its social rituals.",
      image: "/images/landscape.jpg",
    },
    {
      id: "04",
      title: "Consulting",
      description:
        "The planning and transformation of large urban areas has a decisive impact on the entire cycle of how we live, work & interact with each other.",
      image: "/images/consulting.jpg",
    },
    {
      id: "05",
      title: "Consulting",
      description:
        "The planning and transformation of large urban areas has a decisive impact on the entire cycle of how we live, work & interact with each other.",
      image: "/images/consulting.jpg",
    },
  ];

  const steps = [
    {
      title: "Concept",
      content:
        "Light. God in she’d thing Night itself. There signs him divided tree heaven over also that open seasons doesn’t living isn’t god.",
    },
    {
      title: "Design & Development",
      content:
        "From idea to blueprint. Bringing innovation, function, and beauty together into every plan and space.",
    },
    {
      title: "Execution",
      content:
        "Where planning meets performance. Quality craftsmanship and attention to detail at every turn.",
    },
    {
      title: "Handover",
      content:
        "The final step, delivering your vision — complete, polished, and ready to use.",
    },
  ];

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <p className={styles.hello}>Say Hello!</p>
            <h1 className={styles.title}>Professional & Friendly</h1>
            <p className={styles.description}>
              Always happy, enthusiastic and creative, is something to talk
              about Arquito’s Team.
            </p>
          </div>
        </div>
      </section>

      <section className="container section_padding">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 justify-content-center d-flex ">
            <div className="border-top border-4 border-warning pt-4 history-wrapper dotted-bg ">
              <div style={{ paddingLeft: "34px" }}>
                <p
                  className="text-secondary text-uppercase mb-2 history-text"
                  style={{ letterSpacing: "2px" }}
                >
                  Our History
                </p>
                <h1 className="display-1 mb-0 numYear">25</h1>
                <h4 className="experince-text">Years Experience</h4>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={`col-md-6 mt-5 mt-md-0 ${styles.rightSection }`}>
            <h5 className="mb-4 achivements ">Our Achievements</h5>

            <div className="mb-4">
              <h2 className="numbers">12,000</h2>
              <p className="text-muted">
                Partners worldwide, as well as architects, developers and
                investors.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="numbers">4,620</h2>
              <p className="text-muted">
                Employees & Staffs worldwide at present.
              </p>
            </div>

            <div>
              <h2 className="numbers">2,750</h2>
              <p className="text-muted">
                Project completed and delivery on worldwide with more 60
                countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light section_padding">
        <div className="container">
          <h2 className="label">Our specializations</h2>
          <div className="mt-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {specializations.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="position-relative text-white rounded overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "400px",
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 p-4 d-flex flex-column justify-content-between">
                      <div>
                        <p className="fw-semibold mb-1">{item.id}</p>
                        <h4 className="fw-bold">{item.title}</h4>
                        <p className="small">{item.description}</p>
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

      <section className="container section_padding">
        <h2 className="label">Our Progress</h2>
      </section>

      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left Side: Custom Accordion */}
          <div className="col-md-6">
            <Accordion
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              {steps.map((step, idx) => {
                const keyStr = idx.toString();
                const isActive = activeKey === keyStr;
                return (
                  <Accordion.Item
                    eventKey={keyStr}
                    key={keyStr}
                    className={
                      isActive
                        ? `${styles.accordionItem} ${styles.accordionItemActive}`
                        : styles.accordionItem
                    }
                  >
                    <Accordion.Header>
                      {idx + 1}. {step.title}
                    </Accordion.Header>
                    <Accordion.Body>{step.content}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>

          {/* Right Side: Video */}
          <div className="col-md-6 ">
            <div className={styles.videoWrapper}>
              <div className="video-image">
                <Image
                  src="/zoom.jpg"
                  alt="Video Preview"
                  width={640}
                  height={360}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
  /* ===== General Typography ===== */
  .history-wrapper {
    width: 320px;
  }

  .history-text,
  .numYear,
  .numbers {
    font-family: "Teko", sans-serif;
    font-weight: 400;
    color: rgb(242, 74, 0);
  }

  .history-text {
    font-size: 24px;
  }

  .numYear {
    font-size: 250px;
  }

  .numbers {
    font-size: 100px;
  }

  .experince-text,
  .achivements {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
  }

  .experince-text {
    color: rgb(242, 74, 0);
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.056px;
  }

  .achivements {
    font-weight: 500;
  }

  /* ===== Backgrounds ===== */
  .dotted-bg,
  .videoWrapper {
    background-image: radial-gradient(#ddd 1px, transparent 0);
    background-size: 10px 10px;
  }

  /* ===== Video Wrapper ===== */
  .videoWrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 500px;
    background-color: #000;
    overflow: hidden;
    border-radius: 8px;
    display: flex, 
    justify-content: center !important;
  }

  .video-image {
    position: relative;
    width: 425px;
  }

  /* ===== Play Button ===== */
  .btn-outline-light.rounded-circle.w-40.h-40 {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== Accordion Styling ===== */
  .accordion-button {
    background-color: transparent !important; /* light pink when closed */
    color: black !important;
    box-shadow: none !important;
  }

  .accordion-button:not(.collapsed) {
    background-color: transparent !important;
    color: white !important;
    box-shadow: none !important;
  }

  .accordion-button:focus {
    outline: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
  }

  /* Active Accordion (custom module class) */
  .${styles.accordionItemActive} .accordion-button:not(.collapsed) {
    background-color: transparent !important;
    color: rgb(242, 74, 0) !important;
    padding-right: 30px;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .${styles.accordionItemActive} .accordion-button:not(.collapsed)::after {
    filter: invert(1);
  }
`}</style>
    </>
  );
}
