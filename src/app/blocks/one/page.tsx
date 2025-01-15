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
        className="absolute top-[83px] left-[22px] hidden lg:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={64}
        height={67}
        className="absolute top-[346px] left-[22px] hidden lg:block"
      />
      {/* <IconImage
        iconName="money-icon-bg.svg"
        width={95}
        height={121}
        className="absolute top-[78px] left-[45%]"
      /> */}

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={81}
        height={84}
        className="absolute top-[65px] right-[145px] hidden lg:block"
      />

      <IconImage
        iconName="bottle-icon-bg.svg"
        width={71}
        height={93}
        className="absolute top-[197px] right-[304px] hidden xl-custom:block"
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

export default function BlockOne() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col flex-1">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/blocks" className="relative flex items-center">
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
          <Link
            href="/blocks/two"
            className="relative flex items-center ml-auto"
          >
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
        <div className="flex flex-col w-[958px] max-w-full gap-[32px] h-full z-20 text-center items-center relative flex-1">
          <h2 className="text-[2rem] text-white mt-8">Block One</h2>
          <h1 className="text-[#E8B14B] text-5xl w-[518px] max-w-full">
            Why Satoshi Miner?
          </h1>
          <h3 className="text-white text-xl leading-6">
            Because Crypto Should Be Fun, Not Stressful
          </h3>

          <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-8">
            <Link
              href="/"
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
              href="/blocks/two"
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

          <div className="w-[573px] max-w-full text-left relative mt-auto h-[428px]">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base">
                Forget the anxiety of trading; we’ve cracked the code to make
                DeFi entertaining:
              </h5>

              <ul className="text-white text-xs">
                <li>
                  • Tap, Earn, Repeat: Simplified mining that anyone can play.
                </li>
                <li>
                  • BTCFi Meets TON: Bridging the Bitcoin ethos with Telegram’s
                  largest blockchain.
                </li>
                <li>
                  • DeFi Gamified: Stake, farm, and grow your portfolio—all in a
                  game
                </li>
              </ul>
            </TriangelBox>

            <div className="w-[573px] mt-6 z-10">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-left relative z-10 w-[30%]">
                You bring the vibes; we’ll bring the gains. It’s time to level
                up your crypto game.
              </h3>
            </div>
            <div className="absolute bottom-0 right-0 md:right-[-8%] z-0 mb-[-24px]">
              <IconImage
                iconName="character-2.svg"
                width={400}
                height={365}
                className={clsx(
                  "z-10 self-end mb-[-24px] mr-[-24px] lg:mr-0 lg:mb-0"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <Background className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
