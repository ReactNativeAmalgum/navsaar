"use client";

import styles from "@/styles/components/Project.module.css";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Carousel, Button } from "react-bootstrap";

const CompareSlider = dynamic(() => import("react-compare-image"), {
  ssr: false,
});

const galleryItems = {
  "Living Room": [
    {
      beforeSrc:
        "https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg",
      afterSrc:
        "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg",
      title: "Laura's Living Room",
    },
    {
      beforeSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      afterSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg",
      title: "Heather's Living Room",
    },
  ],
  Bedroom: [
    {
      beforeSrc:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classic-contemporary-living-room-with-marble-wall-paneling-and-maroon-accent-chairs/contemporary-living-room-with-beige-sofa.jpg.transform/bh-gallery-listing/image.webp",
      afterSrc:
        "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg",
      title: "Virginia's Bedroom",
    },
  ],
  "Dining Room": [
    {
      beforeSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      afterSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg",
      title: "Heather's Dining Room",
    },
  ],
  Kitchen: [
    {
      beforeSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      afterSrc:
        "https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg",
      title: "Heather's Kitchen",
    },
  ],
};

const buttons = ["Living Room", "Bedroom", "Dining Room", "Kitchen"];
function NoClickJumpCompare({ leftImage, rightImage, alt }) {
  const startX = useRef(null);
  const startY = useRef(null);
  const moved = useRef(false);
  const containerRef = React.useRef(null);

  const onPointerDown = (e) => {
    startX.current = e.clientX || e.touches?.[0]?.clientX;
    startY.current = e.clientY || e.touches?.[0]?.clientY;
    moved.current = false;
  };

  const onPointerMove = (e) => {
    if (startX.current === null || startY.current === null) return;

    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const currentY = e.clientY || e.touches?.[0]?.clientY;

    const dx = Math.abs(currentX - startX.current);
    const dy = Math.abs(currentY - startY.current);

    if (dx > 5 || dy > 5) {
      moved.current = true; // User is dragging
    }
  };

  const onPointerUp = (e) => {
    if (!moved.current) {
      // It's a click without drag — prevent the slider jump
      e.preventDefault();
      e.stopPropagation();
    }
    startX.current = null;
    startY.current = null;
    moved.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        startX.current = null;
        startY.current = null;
        moved.current = false;
      }}
      style={{ userSelect: "none", touchAction: "none" }}
    >
      <CompareSlider
        leftImage={leftImage}
        rightImage={rightImage}
        alt={alt}
        sliderLineColor="#fff"
      />
    </div>
  );
}
export default function Gallery() {
  const [showMore, setShowMore] = React.useState(false); // for Read More
  const [showDropdown, setShowDropdown] = React.useState(false); // for dropdown

  const [activeBtn, setActiveBtn] = React.useState("Living Room");
  const [links, setLinks] = React.useState([]);
  const [carouselItems, setCarouselItems] = React.useState(
    galleryItems["Living Room"]
  );
  const [activeSubLink, setActiveSubLink] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  React.useEffect(() => {
    handleMainCategoryClick("Living Room"); // default
  }, []);
  React.useEffect(() => {
    handleMainCategoryClick("Living Room"); // default
  }, []);

  const dropdownRef = useRef();

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMainCategoryClick = (category) => {
    setActiveBtn(category);
    setActiveSubLink(""); // Reset sub-link on main category change
    const items = galleryItems[category] || [];

    setCarouselItems(items);
    setActiveIndex(0); // Reset carousel index

    const subLinks = items.map((item) => item.title);
    setLinks(subLinks);
  };

  const handleSubLinkClick = (subLink) => {
    setActiveSubLink(subLink);
    const items = galleryItems[activeBtn] || [];
    const filtered = items.filter((item) => item.title === subLink);
    setCarouselItems(filtered.length > 0 ? filtered : items);
    setActiveIndex(0); // Reset carousel index on sublink change
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const goNext = () => {
    if (activeIndex < carouselItems.length - 1) setActiveIndex(activeIndex + 1);
  };
  return (
    <>
      <section className={`contianer section_padding ${styles.imageSection}`}>
        <div className="container">
          {/* Main Category Buttons */}
          <div className={styles.headerContainer}>
            <div className="left-cont">
              <h2 className="label">Our Works</h2>
            </div>
            <div className={styles.rightCont}>
              {windowWidth < 1024 ? (
                <div className={styles.dropdownContainer} ref={dropdownRef}>
                  <button
                    className={styles.dropdownToggle}
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    {activeBtn}{" "}
                    <span className={styles.arrow}>
                      {/* <i className={`${card.iconClass}`} style={{ fontSize: "42px", color:'#f24a00' }}></i> */}

                      {showDropdown ? (
                        <i className="caret up"></i>
                      ) : (
                        <i className="caret down"></i>
                      )}
                    </span>
                  </button>

                  {showDropdown && (
                    <ul className={styles.dropdownMenu}>
                      {buttons.map((btn, idx) => (
                        <li key={idx}>
                          <button
                            className={`${styles.dropdownItem} ${
                              activeBtn === btn ? styles.active : ""
                            }`}
                            onClick={() => {
                              handleMainCategoryClick(btn);
                              setShowDropdown(false);
                            }}
                          >
                            {btn}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <ul className="custom-list text-center">
                  {buttons.map((btn, idx) => (
                    <li key={idx} className="px-3 py-2">
                      <button
                        className={`custom-btn ${
                          activeBtn === btn ? "active" : ""
                        }`}
                        onClick={() => handleMainCategoryClick(btn)}
                      >
                        {btn}
                      </button>
                    </li>
                  ))}
                  <button
                    className={`custom-btn`}
                    onClick={() => handleMainCategoryClick("Explore More")}
                  >
                    Explore More
                  </button>
                </ul>
              )}
            </div>
          </div>

          {/* Subcategory Buttons */}
          <div className="subHeader">
            <ul className="subLabel">
              {Array.isArray(links) &&
                links.map((link, idx) => (
                  <li key={idx} className="px-3 py-2 d-inline">
                    <button
                      className={`custom-btn ${
                        activeSubLink === link ? "active" : ""
                      }`}
                      onClick={() => handleSubLinkClick(link)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Carousel */}
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            slide={false}
            variant="dark"
            className="before-after-carousel mt-5"
            controls={false} // hide default controls
            indicators={false} // hide indicators if you want
          >
            {carouselItems.map((item, idx) => (
              <Carousel.Item key={idx}>
                <div className="d-flex justify-content-center">
                  <div className="card before-after-card border-0 p-3">
                    <NoClickJumpCompare
                      leftImage={item.beforeSrc}
                      rightImage={item.afterSrc}
                      alt={`${item.title} Comparison`}
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      <style jsx>{`
        .before-after-card {
          width: 100%;
        }
        .card-title {
          font-weight: 600;
          font-size: 1.25rem;
        }

        .custom-list,
        .subLabel {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        .custom-list li,
        .subLabel li {
          display: inline-block;
          margin: 0 12px;
        }
        .custom-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px 10px;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .custom-btn.active {
          color: #000000ff;
          text-decoration: none;
        }
        .subHeader {
          display: flex;
          justify-content: center;
          padding-top: 30px;
        }
        .caret {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-left: 8px;
          border-right: 2px solid #f24a00;
          border-bottom: 2px solid #f24a00;
          transform: rotate(45deg);
          transition: transform 0.3s ease;
          vertical-align: middle;
          color: black;
        }

        /* v caret (downward) */
        .caret.down {
          transform: rotate(45deg);
        }

        /* ^ caret (upward) */
        .caret.up {
          transform: rotate(-135deg);
        }
      `}</style>
    </>
  );
}
