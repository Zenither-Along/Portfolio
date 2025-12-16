import type { Metadata } from "next";
import { Inter, Instrument_Sans, Playfair_Display, Special_Elite } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alongbar Brahma - Web Developer",
  description: "Web Developer crafting beautiful and purposeful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSans.variable} ${playfairDisplay.variable} ${specialElite.variable} font-sans antialiased bg-[#FAFAFA] text-gray-900`}
      >
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
