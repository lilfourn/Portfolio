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
  title: {
    default: "Luke Fournier | Full Stack Developer",
    template: "%s | Luke Fournier"
  },
  description: "Luke Fournier - Full Stack Developer specializing in Next.js, React, and modern web technologies. Building innovative web applications with a focus on user experience and performance.",
  keywords: [
    "Luke Fournier",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Frontend Development",
    "Backend Development",
    "Web Applications",
    "Software Development",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lukefournier.com',
    siteName: 'Luke Fournier',
    title: 'Luke Fournier | Full Stack Developer & Software Engineer',
    description: 'Luke Fournier - Full Stack Developer specializing in Next.js, React, and modern web technologies.',
    images: [
      {
        url: '/website-preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Luke Fournier - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luke Fournier | Full Stack Developer & Software Engineer',
    description: 'Luke Fournier - Full Stack Developer specializing in Next.js, React, and modern web technologies.',
    images: ['/website-preview-image.png'],
    creator: '@lukefournier'
  },
  authors: [{ name: "Luke Fournier" }],
  creator: "Luke Fournier",
  publisher: "Luke Fournier",
  icons: {
    icon: "/LF.ico"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "scT9cLmVy0e03RLqXRKSFr8zCenXRvyhhS8ru75XXwE", // Add your Google Search Console verification code
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
