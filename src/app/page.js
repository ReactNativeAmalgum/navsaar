// "use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import { useEffect, useReducer, useState } from "react";
// import ZoomImage from "./components/ZoomImage";

// export default function Home() {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   const [hidden, setHidden] = useState(false);
//   const lastScrollY = useReducer(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setHidden(currentScrollY > lastScrollY.current);
//       lastScrollY.current = currentScrollY;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section style={{flexGrow: 1, height:'100%'}} >
//       <Navbar hidden={hidden} setHidden={setHidden} />
//       <ZoomImage hidden={hidden} setHidden={setHidden} />
//       <div style={{height:'50%', flexGrow:1}} className="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <h1 className="text-center mt-5">Welcome to Navsaar</h1>
//             <p className="text-center">Your architecture studio for modern designs.</p>
//           </div>
//         </div>
//         </div>
//     </section>
//   );
// }



// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   useEffect(() => {
//     gsap.utils.toArray(".section").forEach((section) => {
//       gsap.fromTo(
//         section,
//         { scale: 1, opacity: 1, zIndex: 1 },
//         {
//           scale: 1.2,
//           opacity: 0,
//           zIndex: 0,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <main>
//       <section className="section section-1">
//         <div className="content">
//           <h1>Mountain Escape</h1>
//           <p>Feel the power of the mountains.</p>
//         </div>
//       </section>
//       <section className="section section-2">
//         <div className="content">
//           <h1>Deep Forest</h1>
//           <p>Discover peace within nature.</p>
//         </div>
//       </section>
//       <section className="section section-3">
//         <div className="content">
//           <h1>Ocean Vibes</h1>
//           <p>Let the waves take you away.</p>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [styles, setStyles] = useState([
    { opacity: 1, scale: 1 }, // Section 1
    { opacity: 0.4, scale: 0.9 }, // Section 2
    { opacity: 0.4, scale: 0.9 }, // Section 3
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const windowHeight = window.innerHeight;

      const newStyles = [
        { opacity: 1, scale: 1 },
        { opacity: 0.4, scale: 0.9 },
        { opacity: 0.4, scale: 0.9 },
      ];

      const scrollY = window.scrollY;

      /** --- SECTION 1 ZOOM --- **/
      const zoomMax = 3; // max zoom
      const zoomDistance = 600; // scroll distance
      const zoomProgress = Math.min(scrollY / zoomDistance, 1);

      // 🔥 Use sine easing for smooth in-out zoom
      const easedZoom = Math.sin(zoomProgress * Math.PI);

      newStyles[0] = {
        opacity: 1,
        scale: 1 + easedZoom * (zoomMax - 1), // 1 → 3 → 1 smoothly
      };

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const progress = Math.min(
          Math.max(0, (windowHeight - rect.top) / windowHeight),
          1
        );

        // Smooth fade/zoom between Section 1 → 2
        if (i === 1) {
          newStyles[0] = {
            opacity: 1 - progress,
            scale: newStyles[0].scale, // keep current eased zoom
          };

          newStyles[1] = {
            opacity: 0.4 + progress * 0.6,
            scale: 0.9 + progress * 0.1,
          };
        }

        // Smooth fade/zoom between Section 2 → 3
        if (i === 2) {
          newStyles[1] = {
            opacity: 1 - progress,
            scale: 1 - progress * 0.1,
          };

          newStyles[2] = {
            opacity: 0.4 + progress * 0.6,
            scale: 0.9 + progress * 0.1,
          };
        }
      });

      setStyles(newStyles);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section
        className="section one"
        style={{
          opacity: styles[0].opacity,
          transform: `scale(${styles[0].scale})`,
          transition: "transform 0.1s linear, opacity 0.2s linear",
          background:
            "url('https://picsum.photos/1920/1080?random=1') center/cover no-repeat",
        }}
      >
        Section 1
      </section>

      <section
        className="section two"
        style={{
          opacity: styles[1].opacity,
          transform: `scale(${styles[1].scale})`,
          transition: "transform 0.1s linear, opacity 0.2s linear",
          background:
            "url('https://picsum.photos/1920/1080?random=2') center/cover no-repeat",
        }}
      >
        Section 2
      </section>

      <section
        className="section three"
        style={{
          opacity: styles[2].opacity,
          transform: `scale(${styles[2].scale})`,
          transition: "transform 0.1s linear, opacity 0.2s linear",
          background:
            "url('https://picsum.photos/1920/1080?random=3') center/cover no-repeat",
        }}
      >
        Section 3
      </section>
    </div>
  );
}
