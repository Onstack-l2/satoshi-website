import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import clsx from "clsx";
import BlockOneBg from "@/app/ui/background/BlockOneBg";
import Link from "next/link";
import { blockOneContent } from "@/data/siteContent.json";

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
          <h2 className="text-[2rem] text-white mt-8">
            {blockOneContent.header}
          </h2>
          <h1 className="text-[#E8B14B] text-5xl w-[518px] max-w-full">
            {blockOneContent.title}
          </h1>
          <h3 className="text-white text-xl leading-6">
            {blockOneContent.subtitle}
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
                {blockOneContent.description}
              </h5>

              <ul className="text-white text-xs">
                {blockOneContent.listItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </TriangelBox>

            <div className="w-[573px] mt-6 z-10 max-w-full">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-left relative z-10 w-[30%]">
                {blockOneContent.characterSpeech}
              </h3>
            </div>
            <div className="absolute bottom-0 right-0 md:right-[-8%] z-0 mb-[-118px] sm:mb-[-24px]">
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
        <BlockOneBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
