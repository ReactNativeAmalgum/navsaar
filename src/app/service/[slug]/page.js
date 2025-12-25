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

// 🔹 SERVICE DATA
const servicesData = {
  "design-consultation": {
    banner: {
      title: "Design Consultation",
      subtitle: "Our Service",
      description:
        "We begin by understanding your space, lifestyle, and preferences to shape a clear design direction.",
      image: "/zoom.jpg",
    },
    content: [
      "Detailed discussions to understand your needs and expectations.",
      "Mood boards and concept ideation for visual clarity.",
      "Budget and feasibility analysis before execution.",
      "A strong foundation that guides the entire project smoothly.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Concept Development",
          description: "Initial ideas translated into clear design concepts.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Mood Boards",
            description: "Color palettes and material inspiration.",
          },
          {
            image: "/zoom3.jpg",
            title: "Design Direction",
            description: "Clear roadmap before moving to execution.",
          },
        ],
      },
    ],
  },

  "residential-interiors": {
    banner: {
      title: "Residential Interiors",
      subtitle: "Our Service",
      description:
        "Personalized home interiors designed for comfort, beauty, and functionality.",
      image: "/zoom.jpg",
    },
    content: [
      "Tailored interior solutions for apartments and villas.",
      "Designs that reflect your lifestyle and personality.",
      "Careful selection of colors, materials, and finishes.",
      "Functional layouts blended with timeless aesthetics.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Living Spaces",
          description: "Warm and welcoming living room designs.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Bedrooms",
            description: "Comfort-focused, relaxing bedroom interiors.",
          },
          {
            image: "/zoom3.jpg",
            title: "Kitchens",
            description: "Efficient and stylish kitchen solutions.",
          },
        ],
      },
    ],
  },

  "commercial-interiors": {
    banner: {
      title: "Commercial Interiors",
      subtitle: "Our Service",
      description:
        "Functional and inspiring commercial spaces that elevate your brand.",
      image: "/zoom.jpg",
    },
    content: [
      "Office, retail, restaurant, and showroom interiors.",
      "Designs focused on productivity and customer experience.",
      "Brand-aligned spatial planning and aesthetics.",
      "Efficient layouts that support business operations.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Office Design",
          description: "Workspaces that enhance focus and collaboration.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Retail Spaces",
            description: "Customer-centric retail interiors.",
          },
          {
            image: "/zoom3.jpg",
            title: "Hospitality",
            description: "Inviting restaurant and café designs.",
          },
        ],
      },
    ],
  },

  "turnkey-solutions": {
    banner: {
      title: "Turnkey Solutions",
      subtitle: "Our Service",
      description:
        "Complete interior solutions from concept to final handover.",
      image: "/zoom.jpg",
    },
    content: [
      "Single-point responsibility for the entire project.",
      "Material sourcing, vendors, and execution management.",
      "Strict quality control and timeline adherence.",
      "A stress-free, ready-to-move-in experience.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Execution",
          description: "Seamless coordination and site supervision.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Material Management",
            description: "Quality materials sourced responsibly.",
          },
          {
            image: "/zoom3.jpg",
            title: "Final Handover",
            description: "Delivered on time, as promised.",
          },
        ],
      },
    ],
  },

  "space-planning-3d-visualization": {
    banner: {
      title: "Space Planning & 3D Visualization",
      subtitle: "Our Service",
      description:
        "Visualize your space clearly before execution begins.",
      image: "/zoom.jpg",
    },
    content: [
      "Optimized 2D layouts for efficient space usage.",
      "Realistic 3D renders for design clarity.",
      "Better decision-making for materials and layouts.",
      "Reduced errors during execution phase.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "2D Planning",
          description: "Functional and efficient layouts.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "3D Renders",
            description: "Photorealistic design previews.",
          },
          {
            image: "/zoom3.jpg",
            title: "Walkthroughs",
            description: "Experience the space virtually.",
          },
        ],
      },
    ],
  },

  "custom-furniture-decor": {
    banner: {
      title: "Custom Furniture & Décor",
      subtitle: "Our Service",
      description:
        "Furniture and décor designed specifically for your space.",
      image: "/zoom.jpg",
    },
    content: [
      "Custom-designed furniture tailored to your needs.",
      "Curated décor elements for visual harmony.",
      "Premium materials for durability and comfort.",
      "Unique interiors with a personalized touch.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Custom Furniture",
          description: "Designed exclusively for your space.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Lighting",
            description: "Decorative and functional lighting.",
          },
          {
            image: "/zoom3.jpg",
            title: "Décor Styling",
            description: "Finishing touches that elevate design.",
          },
        ],
      },
    ],
  },

  "renovation-remodeling": {
    banner: {
      title: "Renovation & Remodeling",
      subtitle: "Our Service",
      description:
        "Transforming existing spaces into modern interiors.",
      image: "/zoom.jpg",
    },
    content: [
      "Complete and partial renovation solutions.",
      "Modern upgrades for functionality and aesthetics.",
      "Minimal disruption during renovation work.",
      "Enhanced comfort and property value.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Makeovers",
          description: "Fresh, modern transformations.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Upgrades",
            description: "Smart and stylish improvements.",
          },
          {
            image: "/zoom3.jpg",
            title: "Restyling",
            description: "Reviving outdated interiors.",
          },
        ],
      },
    ],
  },

  "sustainable-smart-design": {
    banner: {
      title: "Sustainable & Smart Design",
      subtitle: "Our Service",
      description:
        "Eco-friendly, energy-efficient, and future-ready interiors.",
      image: "/zoom.jpg",
    },
    content: [
      "Sustainable materials and responsible design choices.",
      "Energy-efficient lighting and systems.",
      "Smart home technology integration.",
      "Interiors designed for the future.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Eco Materials",
          description: "Responsible and sustainable choices.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Smart Lighting",
            description: "Energy-saving lighting solutions.",
          },
          {
            image: "/zoom3.jpg",
            title: "Home Automation",
            description: "Convenience through smart technology.",
          },
        ],
      },
    ],
  },

  "project-management-execution": {
    banner: {
      title: "Project Management & Execution",
      subtitle: "Our Service",
      description:
        "Flawless execution with strong project management.",
      image: "/zoom.jpg",
    },
    content: [
      "End-to-end project planning and coordination.",
      "Vendor management and site supervision.",
      "Strict quality checks and timeline control.",
      "Smooth, hassle-free project delivery.",
    ],
    slides: [
      {
        leftBox: {
          image: "/zoom2.png",
          title: "Site Supervision",
          description: "On-site quality and progress control.",
        },
        rightBoxes: [
          {
            image: "/service.jpg",
            title: "Vendor Coordination",
            description: "Smooth collaboration across teams.",
          },
          {
            image: "/zoom3.jpg",
            title: "Timely Delivery",
            description: "Projects completed as scheduled.",
          },
        ],
      },
    ],
  },
};


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

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug];
  const [blur, setBlur] = useState(0);
  const swiperRef = useRef(null);

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
            {service.content.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
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
