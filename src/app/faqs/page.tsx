import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";

const ImageLine = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("w-[1444px]", className)}>
      <Image src="/icons/line.svg" alt="" height={75} width={2888} />
    </div>
  );
};

const Background = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "w-[1444px] relative h-[712px] z-0 py-[20px] mt-[44px]",
        className
      )}
    >
      <IconImage
        iconName="btc-icon-bg.svg"
        width={90}
        height={89}
        className="absolute top-[83px] left-[22px] hidden xl-custom:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={64}
        height={67}
        className="absolute top-[346px] left-[22px]"
      />
      <IconImage
        iconName="money-icon-bg.svg"
        width={95}
        height={121}
        className="absolute top-[78px] left-[45%] hidden xl-custom:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={81}
        height={84}
        className="absolute top-[65px] right-[145px]  hidden lg:block"
      />

      <IconImage
        iconName="bottle-icon-bg.svg"
        width={71}
        height={93}
        className="absolute top-[197px] right-[304px]"
      />

      <IconImage
        iconName="btc-icon-bg.svg"
        width={90}
        height={89}
        className="absolute bottom-[86px] right-[351px]"
      />

      <div className="z-0 absolute bottom-0 h-fit w-full flex">
        <div className="relative w-full h-fit mt-[-5px]">
          {[1, 2, 3, 4, 5, 6].map((num, index) => {
            return (
              <ImageLine
                key={num}
                className={clsx(
                  index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
                )}
              />
            );
          })}
        </div>
        <div className="relative w-full h-fit ">
          {[1, 2, 3, 4, 5, 6].map((num, index) => {
            return (
              <ImageLine
                key={num}
                className={clsx(
                  index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
                )}
              />
            );
          })}
        </div>
        <div className="relative w-full h-fit mt-[5px]">
          {[1, 2, 3, 4, 5, 6].map((num, index) => {
            return (
              <ImageLine
                key={num}
                className={clsx(
                  index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function HowToStart() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col flex-1 lg:flex-row">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/how-to-start" className="relative flex items-center">
            <IconImage
              iconName="play-icon.svg"
              width={119}
              height={119}
              alt=""
              className="mt-5"
              flipHorizontal={true}
            />
            <IconImage
              iconName="arrow-icon-bg.svg"
              width={70}
              height={80}
              className="mb-10"
              flipHorizontal={true}
            />
          </Link>
          <Link href="/staking" className="relative flex items-center ml-auto">
            <IconImage
              iconName="arrow-icon-bg.svg"
              width={70}
              height={80}
              className="mb-10"
            />
            <IconImage
              iconName="play-icon.svg"
              width={119}
              height={119}
              alt=""
              className="mt-5"
            />
          </Link>
        </div>

        <div className="flex flex-1 w-full">
          <div className="flex flex-col w-full gap-[32px] z-20 text-center lg:text-start items-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-8">FAQ</h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[578px]">
              Got Questions? We’ve Got Answers
            </h1>

            <div className="flex flex-col gap-5 w-[491px] text-start">
              {[
                {
                  q: "What is Satoshi Miner?",
                  a: "A Telegram-based game combining Bitcoin-inspired DeFi (BTCFi) with TON, Sol & Sui blockchain power.",
                },
                {
                  q: "How do I earn?",
                  a: "Mine, raid, stake, and collaborate through cooperation hubs, farm liquidity and more to earn $satBTC.",
                },
                {
                  q: "Is this really DeFi?",
                  a: "Absolutely! We gamified it, but the principles remain. Stake, farm, and contribute to TVL seamlessly.",
                },
                {
                  q: "Can I get rich playing this?",
                  a: "That depends on how good you are at mining, raiding, and staking. Fortune favors the tapped.",
                },
              ].map((item, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <div className="flex gap-4">
                      <h2 className="text-white text-base leading-6">Q</h2>
                      <h2 className="text-white text-base leading-6">
                        {item.q}
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-[#E38539] text-base leading-6">A</h2>
                      <h2 className="text-[#E38539] text-base leading-6">
                        {item.a}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-8">
          <Link
            href="/how-to-start"
            className="relative flex items-center ml-[-5px] sm:ml-6"
          >
            <IconImage
              iconName="play-icon.svg"
              width={119}
              height={119}
              alt=""
              className="mt-5"
              flipHorizontal={true}
            />
            <IconImage
              iconName="arrow-icon-bg.svg"
              width={70}
              height={80}
              className="mb-10 ml-[-20px]"
              flipHorizontal={true}
            />
          </Link>
          <Link
            href="/staking"
            className="relative flex items-center ml-auto mr-[-5px] sm:mr-6"
          >
            <IconImage
              iconName="arrow-icon-bg.svg"
              width={70}
              height={80}
              className="mb-10 mr-[-20px]"
            />
            <IconImage
              iconName="play-icon.svg"
              width={119}
              height={119}
              alt=""
              className="mt-5"
            />
          </Link>
        </div>

        <div className="flex flex-1 w-full mt-auto mb-[-24px] justify-center">
          <div className="overflow-hidden w-[458px] h-[545px]">
            <Image
              src="/icons/character-6.svg"
              width={458}
              height={545}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <Background className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
