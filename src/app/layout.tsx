import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import FooterMenu from "@/components/modules/FooterMenu/FooterMenu";
import Footer from "@/components/modules/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "تماشای آنلاین فیلم و سریال | نماوا",
  description:
    "تماشای آنلاین فیلم و سریال در سایت فیلم نماوا. دانلود و تماشای آنلاین جدیدترین فیلم و سریال ایرانی و خارجی با قابلیت دانلود رایگان در نماوا.",
  icons: {
    icon: "/images/namava.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="font-Iran bg-[#121212]">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FooterMenu />
        <Toaster/>
      </body>
    </html>
  );
}
