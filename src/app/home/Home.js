import React, { useEffect, useReducer, useState } from "react";
import ZoomImage from "./ZoomImage";
import AboutUs from "./AboutUs";
import OurServices2 from "./OurServices2";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <ZoomImage hidden={hidden} setHidden={setHidden} />
      <AboutUs />
      <OurServices2 />
      <Gallery />
      <Testimonial />
    </>
  );
}
