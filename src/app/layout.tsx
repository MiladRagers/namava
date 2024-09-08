import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/modules/Navbar/Navbar";
import FooterMenu from "@/src/components/modules/FooterMenu/FooterMenu";
import Footer from "@/src/components/modules/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { authUser } from "@/src/utils/serverHelper";
import { checkUserSubscription } from "../libs/service/services";

export const metadata: Metadata = {
  title: "تماشای آنلاین فیلم و سریال | نماوا",
  description:
    "تماشای آنلاین فیلم و سریال در سایت فیلم نماوا. دانلود و تماشای آنلاین جدیدترین فیلم و سریال ایرانی و خارجی با قابلیت دانلود رایگان در نماوا.",
  icons: {
    icon: "/images/namava.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await authUser();
  const userSubscription = await checkUserSubscription();

  return (
    <html lang="fa" dir="rtl" className="font-Iran bg-[#121212]">
      <body>
        <Navbar
          user={JSON.parse(JSON.stringify(user))}
          userSubscription={userSubscription}
        />
        {children}
        <Footer />
        <FooterMenu />
        <Toaster />
      </body>
    </html>
  );
}
