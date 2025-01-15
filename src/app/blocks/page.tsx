import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";
import IconImage from "../ui/IconImage";

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
        className="absolute top-[83px] left-[22px]  hidden sm:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={64}
        height={67}
        className="absolute top-[346px] left-[22px] hidden xl-custom:block"
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
        className="absolute top-[65px] right-[145px] hidden xl-custom:block"
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
        className="absolute bottom-[86px] right-[351px] hidden sm:block"
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
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col">
        <div className="flex flex-col max-w-full w-[958px] gap-[32px] z-20 text-center items-center">
          <h2 className="text-[2rem] text-white mt-8">Genesis Block</h2>
          <h1 className="text-[#E8B14B] text-5xl w-[518px] max-w-full">
            The Genesis of Satoshi Miner
          </h1>
          <div>
            <h2 className="text-[#E38539] text-xl leading-6">
              From Mining Rigs to Meme Empires
            </h2>
            <h3 className="text-white text-xl leading-6">
              Once upon a blockchain, there was Satoshi Nakamoto and Bitcoin—the
              OG of decentralization. Then came Satoshi Miner, your next-gen
              crypto playground.
            </h3>
            <h2 className="text-[#E38539] text-xl leading-6 mt-4">
              We took Bitcoin’s legacy, added memes, and layered on the Telegram
              to create the ultimate BTCFi experience. From solo mining to
              cooperation hubs, we’re here to gamify finance for the masses.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex static lg:absolute top-[50%] z-40 w-full">
        <Link href="/" className="relative flex items-center ml-6">
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
          href="/blocks/one"
          className="relative flex items-center ml-auto mr-6"
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
      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <Background className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
