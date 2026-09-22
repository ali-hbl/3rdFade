import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3rd Fade | FILMMAKER & CREATIVE DIRECTOR",
  description:
    "Discover my professional video creations. Portfolio of a videographer passionate about cinematic art and visual storytelling.",
  keywords:
    "videographer, portfolio, cinema, video, creation, editing, production, post-production, capcut",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "3rd Fade" }],
  openGraph: {
    title: "3rd Fade | Cinematic Creations",
    description:
      "Discover my professional video creations. Portfolio of a filmmaker passionate about cinematic art and visual storytelling.",
    type: "website",
    images: [
      {
        url: "/LOGO_3RD_FADE.png",
        width: 1920,
        height: 1080,
        alt: "3rd Fade - Filmmaker Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
