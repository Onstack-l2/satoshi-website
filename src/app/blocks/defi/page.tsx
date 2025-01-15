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
        className="absolute top-[346px] left-[22px]  hidden md:block"
      />
      <IconImage
        iconName="money-icon-bg.svg"
        width={95}
        height={121}
        className="absolute top-[78px] left-[45%] hidden sm:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={81}
        height={84}
        className="absolute top-[65px] right-[145px] hidden lg:block"
      />

      {/* <IconImage
        iconName="bottle-icon-bg.svg"
        width={71}
        height={93}
        className="absolute top-[197px] right-[304px]"
      /> */}

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

export default function BlockThree() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/blocks/three" className="relative flex items-center">
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
            href="/how-to-start"
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

        <div className="flex flex-1 w-full">
          <div className="flex flex-col w-full gap-[32px] z-20 lg:text-start items-center text-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-10">DeFi</h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[578px]">
              Smarter Gains, Zero Stress
            </h1>

            <div className="flex gap-[26px]">
              <div className="flex flex-col gap-[10px] w-[371px]">
                <div className="flex flex-col gap-1 w-[371px]">
                  <span className="text-white text-base">Mining Rewards</span>
                  <span className="text-[#E38539] text-xs">
                    For the grinders who tap, raid, and cooperate daily to
                    unlock $satBTC glory.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Staking</span>
                  <span className="text-[#E38539] text-xs">
                    Lock up your $satBTC and watch your portfolio grow.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Yield Farming</span>
                  <span className="text-[#E38539] text-xs">
                    Partnered with top farming platforms to deliver the best
                    farming opportunities.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Degens</span>
                  <span className="text-[#E38539] text-xs">
                    Why stress over charts, ape-in along side the smartest
                    wallets in the game.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Cooperation Hubs</span>
                  <span className="text-[#E38539] text-xs">
                    Collaborate with communities to amplify rewards and share
                    mining success.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-8">
          <Link
            href="/blocks/three"
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
            href="/how-to-start"
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

        <div className="flex flex-1 w-full lg:mt-auto mb-[-24px] mt-10 justify-center lg:justify-start">
          <div className="h-fit w-full max-w-[502px] text-left relative">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base">
                Stake, Farm, Ape and Earn Without Breaking a Sweat Say goodbye
                to market anxiety.
              </h5>
            </TriangelBox>

            <div className="w-[573px] mt-6 z-10 max-w-full">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-left relative z-10 w-[30%]">
                You bring the vibes; we’ll bring the gains. It’s time to level
                up your crypto game.
              </h3>
            </div>

            <div className="overflow-hidden mt-[-244px] sm:mt-[-140px] w-[463px] h-[446]">
              <Image
                src="/icons/character-3.svg"
                width={463}
                height={446}
                alt=""
                className="mt-[-20px] sm:mt-[-38px] sm:ml-[142px] absolute lg:right-[-35%] bottom-0"
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
