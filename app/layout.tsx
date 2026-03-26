import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nội Soi Tiêu Hóa Không Đau - Tâm Trí Quảng Nam",
  description: "Lựa chọn hoàn hảo, chăm sóc sức khỏe toàn diện.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-full font-sans text-gray-800">{children}</body>
    </html>
  );
}
