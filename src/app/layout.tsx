import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ManualLoader from "@/components/ManualLoader";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAAN SPORTS",
  description: "A 100% Export Oriented Knit Garment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` relative regular ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ManualLoader>
          <Header />
          {children}
          <Footer />
        </ManualLoader>
      </body>
    </html>
  );
}
