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
        "w-[1444px] relative h-[712px] z-0 py-[20px] mt-[44px] lg:mt-0",
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
        className="absolute top-[346px] left-[22px] hidden xl:block"
      />
      <IconImage
        iconName="money-icon-bg.svg"
        width={95}
        height={121}
        className="absolute top-[78px] left-[45%]  hidden lg:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={81}
        height={84}
        className="absolute top-[65px] right-[145px]  hidden sm:block"
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

      <div className="z-0 absolute bottom-0 lg:bottom-none top-none lg:top-[-20%] h-fit w-full flex">
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
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col lg:flex-row">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/blocks/one" className="relative flex items-center">
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
            href="/blocks/three"
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
        <div className="flex flex-col w-full gap-[32px] mt-[30px] flex-1 z-20 text-center items-center lg:items-start lg:text-start">
          <h2 className="text-[2rem] text-white">Block Two</h2>
          <h1 className="text-[#E8B14B] text-5xl max-w-[518px]">
            Tokenomics—Powered by $satBTC
          </h1>
          <h3 className="text-white text-xl leading-6">
            Where GameFi Meets DeFi
          </h3>

          <h2 className="text-[#E38539] text-xl leading-6">
            At the core of Satoshi Miner is $satBTC, our token driving by you
            The Community!
          </h2>

          <h3 className="text-white text-xl leading-6 w-[303px]">
            $satBTC isn’t just a token; it’s your ticket to the BTCFi
            revolution.
          </h3>

          <div className="flex overflow-x-scroll w-full md:mx-0 justify-center md:max-w-[588px]">
            <div className="flex h-fit w-[819px] items-center py-5">
              <div className="flex flex-col gap-[10px] items-end text-end">
                <div className="flex flex-col gap-1 w-[232px]">
                  <span className="text-white text-base">
                    Where GameFi Meets DeFi
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Smooth swaps, no rugs—keeping $satBTC solid and tradable.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">
                    Where GameFi Meets DeFi
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Smooth swaps, no rugs—keeping $satBTC solid and tradable.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">
                    Where GameFi Meets DeFi
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Smooth swaps, no rugs—keeping $satBTC solid and tradable.
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center w-full relative h-full self-stretch">
                <IconImage
                  iconName="pie-chart.svg"
                  width={120}
                  height={134}
                  className="mt-[42px] mr-[19px]"
                />
                <span className="text-white text-base absolute top-[34px] left-[76px]">
                  5%
                </span>
                <div className="absolute top-[44px] left-[20px] w-[40px] flex items-center">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <span className="text-white text-base absolute top-[105px] left-[46px]">
                  5%
                </span>
                <div className="absolute top-[115px] left-[20px] w-[15px] flex items-center">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <span className="text-white text-base absolute top-[175px] left-[58px]">
                  10%
                </span>
                <div className="absolute top-[185px] left-[20px] w-[27px] flex items-center">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <span className="text-white text-base absolute top-[93px] right-[59px]">
                  10%
                </span>

                <span className="text-white text-base absolute top-[152px] right-[69px]">
                  15%
                </span>
                <div className="absolute top-[15px] right-[20px] w-[70px] flex items-center rotate-[-11deg]">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <div className="absolute top-[91px] right-[20px] w-[27px] flex items-center rotate-[-17deg]">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <div className="absolute top-[157px] right-[20px] w-[29px] flex items-center rotate-[-13deg]">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>

                <div className="absolute top-[212px] right-[20px] w-[110px] flex items-center rotate-[5deg]">
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                  <div className="flex-1 h-0 border-[0.5px] border-white"></div>
                  <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                </div>
                <span className="text-white text-base absolute top-[196px] left-[136px]">
                  20%
                </span>
                <span className="text-white text-base absolute top-[21px] right-[112px]">
                  35%
                </span>
              </div>

              <div className="flex flex-col gap-[10px] items-start  text-start">
                <div className="flex flex-col gap-1 w-[276px]">
                  <span className="text-white text-base">Mining Rewards</span>
                  <span className="text-[#E38539] text-xs">
                    For the grinders who tap, raid, and cooperate daily to
                    unlock $satBTC glory.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Staking</span>
                  <span className="text-[#E38539] text-xs">
                    For the early apes who “get it.” Let’s launch fair and loud.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">Fair Launch</span>
                  <span className="text-[#E38539] text-xs">
                    For the early apes who “get it.” Let’s launch fair and loud.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-base">
                    Marketing & Partnerships
                  </span>
                  <span className="text-[#E38539] text-xs">
                    Fueling memes, KOLs, and legendary campaigns to go viral.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-5">
          <Link
            href="/blocks/one"
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
            href="/blocks/three"
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

        <div className="flex-1 flex flex-col w-full justify-center mb-[-24px] lg:mt-auto items-center lg:items-start mt-7">
          <div className="w-[303px]">
            <h3 className="text-white text-xl leading-6  max-w-full relative z-10 self-start">
              You bring the vibes; we’ll bring the gains. It’s time to level up
              your crypto game.
            </h3>
          </div>
          <div className="relative h-fit w-[400px] sm:w-[573px] max-w-full text-left flex-col flex mt-6">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base">Why $satBTC?</h5>

              <ul className="text-white text-xs">
                {[
                  {
                    label: "Governance",
                    text: "Have your say in how the ecosystem evolves.",
                  },
                  {
                    label: "Rewards",
                    text: "Earn $satBTC through gaming, staking, farming and more",
                  },
                  {
                    label: "Cross-Chain Power",
                    text: "Strengthen liquidity across BTCFi,TON,SOl, SUI & more.",
                  },
                ].map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="text-[#E8B14B]"> • {item.label}:</span>{" "}
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </TriangelBox>

            <div className="w-full overflow-hidden">
              <Image
                src="/icons/character-3.svg"
                width={463}
                height={446}
                alt=""
                className="mt-[-20px] sm:mt-[-38px] sm:ml-[142px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 lg:top-0 right-0 w-full overflow-hidden flex justify-end">
        <Background className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
