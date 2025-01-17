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
  title:
    "Satoshi Miner: Farm Bits Tokens | earn Yields and Stake your way to crypto glory all from your phone",
  description:
    "Satoshi Miner transforms casual gaming into DeFi, blending the thrill of farming with the power of gaming!",
  openGraph: {
    title:
      "Satoshi Miner: Farm Bits Tokens | earn Yields and Stake your way to crypto glory all from your phone",
    description:
      "Satoshi Miner transforms casual gaming into DeFi, blending the thrill of farming with the power of gaming!",
    url: "https://satoshiminer.io",
    siteName: "Satoshi Miner: Farm Bits Tokens",
    images: [
      {
        url: "https://satoshi-website.vercel.app/images/logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Satoshi Miner: Farm Bits Tokens | earn Yields and Stake your way to crypto glory all from your phone",
    description:
      "Satoshi Miner transforms casual gaming into DeFi, blending the thrill of farming with the power of gaming!",
    siteId: "1545263305027092480",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ["https://satoshi-website.vercel.app/images/logo.png"], // Must be an absolute URL
  },
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
          <main className="relative flex-1 flex flex-col gap-8 items-center sm:items-start w-full overflow-hidden">
            {children}
          </main>
          <AlertMessage className="mt-auto" alertMessage={bottomAlertMessage} />
        </div>
      </body>
    </html>
  );
}
