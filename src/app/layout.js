// src/app/layout.js
import { Geist, Geist_Mono, Teko, Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// In layout.js (or _app.js)
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Navsaar Architecture",
  description: "Architecture Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Add Linearicons */}
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${teko.variable} ${roboto.variable}`}
        style={{ overflowX: "hidden", backgroundColor: "#fff", color: "#000" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
