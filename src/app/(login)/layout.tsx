import type { Metadata } from "next";
import { Mitr } from 'next/font/google';
import "../globals.css";
import Navbar from "./components/navbar";
import NextTopLoader from "nextjs-toploader";
const fontInit = Mitr({ 
  subsets: ["latin"],
  weight: ['200','300'],
  variable: '--font-Mitr',
});


export const metadata: Metadata = {
  title: "FON MIS ระบบสารสนเทศคณะพยาบาลศาสตร์ มหาวิทยาลัยเชียงใหม่",
  description: "",
};

export default function WebsiteRootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={fontInit.className}>
          <NextTopLoader
            color="#00cfbd"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #00cfbd,0 0 5px #00cfbd"
          />
          {children}
      </body>
    </html>
  );
}
