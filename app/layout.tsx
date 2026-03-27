import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FloatingCTA from "../components/FloatingCTA";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dịch vụ khám nam khoa, bao quy đầu, yếu sinh lý, sùi mào gà, trĩ | TRUE HOPE",
  description:
    "TRUE HOPE cung cấp dịch vụ khám nam khoa uy tín: kiểm tra bao quy đầu, điều trị yếu sinh lý, sùi mào gà, trĩ và các vấn đề sức khỏe nam giới khác.",
  openGraph: {
    title: "Dịch vụ khám nam khoa tại TRUE HOPE",
    description:
      "TRUE HOPE cung cấp dịch vụ khám nam khoa uy tín: kiểm tra bao quy đầu, điều trị yếu sinh lý, sùi mào gà, trĩ và các vấn đề sức khỏe nam giới khác.",
    url: "/",
    images: [
      { url: 'https://truehope.vn/icon-logo.png', width: 1200, height: 630, alt: 'TRUE HOPE' },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true }, // bật index nếu muốn SEO
  keywords: [
    "bao quy đầu",
    "kiểm tra nam khoa",
    "yếu sinh lý",
    "sùi mào gà",
    "trĩ",
    "khám nam khoa",
    "điều trị yếu sinh lý",
    "chữa sùi mào gà",
    "điều trị trĩ",
    "sức khỏe nam giới"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-full font-sans text-gray-800">
        <Header />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
