import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import IconImage from "./ui/IconImage";
import TriangelBox from "./ui/TriangelBox";

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

      <IconImage
        iconName="bottle-icon-bg.svg"
        width={71}
        height={93}
        className="absolute top-[197px] right-[304px] hidden"
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

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-7xl w-full p-6 mx-auto gap-10 lg:gap-0 z-20 lg:px-8 items-center lg:justify-between lg:my-[91px]">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/blocks" className="relative flex items-center ml-auto">
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

        <div className="flex flex-col flex-1 w-full items-center text-center">
          <div className="flex flex-col  w-[611px] gap-10 lg:gap-[32px] z-20 max-w-full items-center lg:items-start lg:text-start">
            <h1 className="text-[#E8B14B] text-5xl max-w-[506px]">
              Turn Your Phone Into a Money Printer
            </h1>
            <div>
              <h2 className="text-[#E38539] text-xl leading-6">
                Why stress over charts when you can mine, ape-in, and stake your
                way to crypto glory-all from your phone?
              </h2>
              <h3 className="text-white text-xl leading-6">
                Satoshi Miner transforms casual gaming into DeFi, blending the
                thrill of mining with the power of Telegram.
              </h3>
            </div>

            <div className="relative w-[552px] flex justify-center mt-[52px] max-w-full items-center">
              <div className="flex flex-col lg:items-center gap-[21px] text-center w-full items-center">
                <h2 className="text-[#E8B14B] text-xl w-[346px] max-w-full">
                  Join 3M+ players mining their way to $50M TVL.
                </h2>
                <Link
                  className="px-[40px] py-[8px] bg-[#E8B14B] text-[#112030] text-xl rounded-md flex items-center justify-center gap-3 w-[337px] max-w-full"
                  href="#join-satoshi-miner"
                >
                  <span>JOIN SATOSHI MINER</span>
                  <IconImage
                    iconName="play-icon-outline.svg"
                    width={48}
                    height={48}
                    alt=""
                  />
                </Link>
                <h3 className="text-white text-xl w-[462px] max-w-full">
                  Why work hard when you can play smart?
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex static lg:hidden top-[50%] z-40 w-full">
          <Link
            href="/blocks"
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

        <div className="relative lg:static flex flex-1 h-full w-full mt-auto justify-end">
          <div className="lg:hidden max-w-full flex flex-col md:w-[704px] lg:w-full">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base max-w-full">
                It&apos;s like a cheat code for your wallet:
              </h5>
              <ul className="text-white text-xs">
                <li>
                  <span className="text-[#E8B14B]"> • Tap to Mine:</span> Earn
                  Satoshi Coins just by playing.
                </li>
                <li>
                  <span className="text-[#E8B14B]"> • Raiding & Strategy:</span>{" "}
                  Outsmart your rivals and stack those rewards.
                </li>
                <li>
                  <span className="text-[#E8B14B]"> • DeFi Made Fun:</span>{" "}
                  Stake, collaborate, ape-in, and farm yields with zero stress.
                </li>
              </ul>
            </TriangelBox>

            <IconImage
              iconName="character-1.svg"
              width={285}
              height={388}
              className={clsx(
                "z-10 self-end mb-[-24px] mr-[-24px] lg:mr-0 lg:mb-0"
              )}
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:absolute lg:flex max-w-full flex-col right-0 bottom-0 xl:w-[704px] w-[504px] z-10">
        <TriangelBox>
          <h5 className="text-[#E8B14B] text-base max-w-full">
            It&apos;s like a cheat code for your wallet:
          </h5>
          <ul className="text-white text-xs">
            <li>
              <span className="text-[#E8B14B]"> • Tap to Mine:</span> Earn
              Satoshi Coins just by playing.
            </li>
            <li>
              <span className="text-[#E8B14B]"> • Raiding & Strategy:</span>{" "}
              Outsmart your rivals and stack those rewards.
            </li>
            <li>
              <span className="text-[#E8B14B]"> • DeFi Made Fun:</span> Stake,
              collaborate, ape-in, and farm yields with zero stress.
            </li>
          </ul>
        </TriangelBox>

        <IconImage
          iconName="character-1.svg"
          width={285}
          height={388}
          className={clsx(
            "z-10 self-end mb-[-24px] mr-[-24px] lg:mr-0 lg:mb-0"
          )}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <Background className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
