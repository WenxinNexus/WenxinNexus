import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthObserver } from "@/components/auth/AuthObserver"; // 引入監聽器

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "文心匯 Wenxin Nexus",
  description: "高中國文互動式學習平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <AuthObserver /> {/* 放在這裡 */}
        {children}
      </body>
    </html>
  );
}