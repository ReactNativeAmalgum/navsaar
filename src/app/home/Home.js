import React, { useEffect, useReducer, useState } from "react";
import ZoomImage from "./ZoomImage";

export default function Home() {
  const [hidden, setHidden] = useState(false);
  return <ZoomImage hidden={hidden} setHidden={setHidden} />;
}
