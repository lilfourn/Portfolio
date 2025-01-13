import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/Gridbackground";
import Navbar from "./components/navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Luke Fournier",
  description: "Luke Fournier - Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body suppressHydrationWarning className="antialiased font-sans bg-black min-h-screen">
        <GridBackground>
          <Navbar />
          {children}
        </GridBackground>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.58/build/spline-viewer.js"
        />
      </body>
    </html>
  );
}
