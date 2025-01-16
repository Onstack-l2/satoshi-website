// "use client";
import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";

import "./globals.css";
import Header from "./ui/Header";
import { topAlertMessage, bottomAlertMessage } from "@/data/siteContent.json";
import AlertMessage from "./ui/AlertMessage";

export const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satoshi Miner",
  description: "Satoshi Miner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.className}  antialiased bg-[#112030]`}>
        <div className="min-h-screen w-full bg-[#112030] flex flex-col font-bold text-sm">
          <Header />
          <AlertMessage alertMessage={topAlertMessage} />
          <main className="relative flex-1 flex flex-col gap-8 items-center sm:items-start w-full">
            {children}
          </main>
          <AlertMessage className="mt-auto" alertMessage={bottomAlertMessage} />
        </div>
      </body>
    </html>
  );
}
