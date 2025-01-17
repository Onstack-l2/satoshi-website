import IconImage from "@/app/ui/IconImage";
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
        "w-[1444px] relative h-[712px] z-0 py-[20px] mt-[44px] pointer-events-none",
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
        className="absolute top-[197px] right-[304px]  hidden xl-custom:block"
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
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1">
        <div
          className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/faqs" className="relative flex items-center">
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
        </div>
        <div className="flex w-full flex-1 min-h-96">
          <div className="flex flex-col w-full gap-[32px] z-20 lg:text-start items-center text-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-12">Staking</h2>
          </div>
        </div>
        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-5">
          <Link
            href="/faqs"
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
        </div>
        <div className="flex w-full flex-1 mt-auto mx-auto mb-[-24px] justify-center">
          <div className="max-w-full w-[402px] h-[538px]">
            <Image
              src="/icons/character-5.svg"
              width={402}
              height={538}
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
