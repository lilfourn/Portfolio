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
  icons: {
    icon: "/LF.ico"
  },
  openGraph: {
    title: "Luke Fournier",
    description: "Luke Fournier - Fullstack Developer",
    images: [
      {
        url: "/website-preview-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Fournier - Portfolio Website"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Fournier",
    description: "Luke Fournier - Fullstack Developer",
    images: ["/website-preview-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body suppressHydrationWarning className="antialiased font-sans bg-black min-h-screen max-w-[100vw] overflow-x-hidden">
        <GridBackground>
          <Navbar />
          <main className="w-full max-w-full px-4">
            {children}
          </main>
        </GridBackground>
        <script
          async
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.58/build/spline-viewer.js"
        />
      </body>
    </html>
  );
}
