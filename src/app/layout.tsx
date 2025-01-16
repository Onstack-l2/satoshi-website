// "use client";
import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import clsx from "clsx";

import "./globals.css";
import Header from "./ui/Header";

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

          {/* <main className="relative flex-1 flex flex-col gap-8 items-center sm:items-start h-[668px] overflow-auto"> */}
          <AlertMessage />
          <main className="relative flex-1 flex flex-col gap-8 items-center sm:items-start overflow-auto w-full">
            {children}
          </main>
          <AlertMessage className="mt-auto" />

          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
      </body>
    </html>
  );
}

const AlertMessage = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "w-full flex items-start bg-[#855D38] overflow-hidden relative h-5",
        className
      )}
    >
      <p className="text-[#FFFFFF]  animate-slide whitespace-nowrap absolute animate-scroll-left top-0 left-0">
        <span className="text-[#E8B14B]">BREAKING NEWS:</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        debitis quaerat, minima voluptas iure repellat. Sit atque cumque, ad
        inventore est nesciunt ipsa doloribus aspernatur enim hic reprehenderit
        odit explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Labore quam asperiores similique accusantium quas pariatur quos
        illum inventore odio sit non, maiores dolorem voluptatum consectetur
        fugiat, veritatis provident ducimus itaque. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Dolore velit odit accusantium, quia quas
        quibusdam! Eligendi tempore repellat dolorem omnis ipsam, quo, dolores
        minus magni quos eum nesciunt, quasi ex!
      </p>
    </div>
  );
};
