import React, { useEffect, useReducer, useState } from "react";
import ZoomImage from "./ZoomImage";
import OurServices from "./OurServices";
import Work from "./Work";
import AboutUs from "./AboutUs";

export default function Home() {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <ZoomImage hidden={hidden} setHidden={setHidden} />
      <AboutUs />
      <OurServices />
      <Work />
    </>
  );
}
