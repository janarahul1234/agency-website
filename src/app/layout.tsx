import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wavelength® — Independent Creative Studio",
  description:
    "Crafting purposeful brands, digital products and experiences that help ambitious businesses move forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="grain bg-ink text-mist antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-acid focus:px-4 focus:py-2 focus:text-xs focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
