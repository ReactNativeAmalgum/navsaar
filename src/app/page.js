"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { useEffect } from 'react';
import ZoomImage from './components/ZoomImage';

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
            <ZoomImage />

      {/* <Home /> */}
      {/* <div className="container mt-5" style={{height:'150%'}} >
        <h1>Welcome to Navsaar</h1>
        <p>This is the homepage.</p>

        <div style={{ height: "150vh" }}></div>
      </div> */}
    </>
  );
}
