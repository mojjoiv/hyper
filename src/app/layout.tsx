import HeaderTop from "@/components/HeaderTop";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테스트 밸리 - 전자제품 구매는 즐겁습니다",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <HeaderMain />
        <MobNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
