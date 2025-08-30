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


"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Section 1 zoom-out effect
    gsap.to(".section-1", {
      scale: 0.8, // zooms out to 80%
      ease: "none",
      scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true, // keeps section-1 pinned while animating
      },
    });
  }, []);

  return (
    <main>
      {/* Section 1 */}
      <section className="section section-1">
        <div className="content">
          <h1>Mountains & House</h1>
          <p>This section zooms out as you scroll down.</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section-2">
        <div className="content">
          <h1>Next Section</h1>
          <p>This comes up as the first section zooms out.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section-3">
        <div className="content">
          <h1>Final Section</h1>
          <p>Keep scrolling for more animations.</p>
        </div>
      </section>
    </main>
  );
}
