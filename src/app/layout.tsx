import type { Metadata } from "next";
import { Inter, Playfair_Display, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  variable: "--font-unifraktur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer & Designer",
  description: "Modern portfolio showcasing my frontend development and design projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${unifraktur.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <div className="fixed top-0 left-0 p-6 z-50 pointer-events-none">
          <span className="font-unifraktur text-white text-4xl md:text-5xl drop-shadow-lg">portfolio</span>
        </div>
        <CustomCursor />
        <BackgroundOrbs />
        <Header />
        {children}
      </body>
    </html>
  );
}
