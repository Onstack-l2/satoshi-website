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
          <Link href="/blocks/two" className="relative flex items-center">
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
            href="/blocks/defi"
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

        <div className="w-full flex flex-1">
          <div className="flex flex-col w-full gap-[32px] z-20 text-center items-center lg:items-start ">
            <h2 className="text-[2rem] text-white mt-8">Block Three</h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[518px]">
              The Roadmap
            </h1>

            <div className="flex gap-[26px]">
              <div className="flex flex-col gap-[34px] items-start text-end w-[70px]">
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">Phase 1</span>
                  <span className="text-transparent text-xs min-h-[32px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">Phase 2</span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">Phase 3</span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div>
              </div>

              <div className="w-[5.5px] h-[209px] flex items-center flex-col mt-[9px]">
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                <div className="w-[0] h-[90px] border-[0.5px] border-white"></div>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                <div className="h-[105px] border-[0.5px] border-white"></div>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
              </div>

              <div className="flex flex-col gap-[34px] items-start text-start sm:w-[255px]">
                <div className="flex flex-col gap-1 sm:w-[255px]">
                  <span className="text-[#E8B14B] text-base">
                    Start the Revolution
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Launch core gameplay (mining, raiding, Cooperation Hubs.Hit
                    3M+ players.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#E8B14B] text-base">
                    Unlock DeFi Power
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Integrate staking and yield farming, copy trading and more
                    to Drive $50M+ in TVL.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#E8B14B] text-base">
                    BTCFi Domination
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Full BTCFi to TON to SOL to SUI blockchain integration.
                    Achieve 10M players and $500M TVL.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex static z-40 w-full mt-10">
          <Link
            href="/blocks/two"
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
            href="/blocks/defi"
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

        <div className="flex flex-1 w-full lg:mt-auto mb-[-24px] justify-center lg:justify-start mt-10">
          <div className="h-fit w-[505px] max-w-full text-left">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base">
                We’re building the future of DeFi, one tap at a time.
              </h5>
            </TriangelBox>

            <div className="w-full overflow-hidden ml-auto mt-[-3%]">
              <Image
                src="/icons/character-4.svg"
                width={400}
                height={420}
                alt=""
                className="ml-auto"
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
