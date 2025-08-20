import type { Metadata } from "next";
import { Mitr  } from "next/font/google";
import "./globals.css";

const mitr = Mitr({
   subsets: ["latin"],
   weight:["400"],
});

export const metadata: Metadata = {
  title: "Money Share Calculator",
  description: "เว็ปคำนวญเงินที่จะหารกัน",
  keywords:["เงิน","คำนวน" ,"หารกัน" ,"บิด"],
  icons:{
    icon:"/next.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mitr.className}
      >
        {children}
      </body>
    </html>
  );
}
