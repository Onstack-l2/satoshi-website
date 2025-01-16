import DesktopPageNavigation from "@/app/ui/DesktopPageNavigation";
import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import BlockThreeBg from "@/app/ui/background/BlockThreeBg";
import Image from "next/image";
import Link from "next/link";
import { blockThreeContent } from "@/data/siteContent.json";

export default function BlockThree() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1">
        <DesktopPageNavigation prevPath="/blocks/two" nextPath="/blocks/defi" />

        <div className="w-full flex flex-1">
          <div className="flex flex-col w-full gap-[32px] z-20 text-center items-center lg:items-start ">
            <h2 className="text-[2rem] text-white mt-8">
              {blockThreeContent.header}
            </h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[518px]">
              {blockThreeContent.title}
            </h1>

            <div className="flex gap-[26px]">
              <div className="flex flex-col gap-[34px] items-start text-end w-[70px]">
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {blockThreeContent.statges[0].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[32px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {blockThreeContent.statges[1].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {blockThreeContent.statges[2].phase}
                  </span>
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
                {blockThreeContent.statges.map((item, index) => (
                  <div className="flex flex-col gap-1 sm:w-[255px]" key={index}>
                    <span className="text-[#E8B14B] text-base">
                      {item.title}
                    </span>
                    <span className="text-[#E38539] text-xs whitespace-pre-line">
                      {item.description}
                    </span>
                  </div>
                ))}
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
                {blockThreeContent.features.title}
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
        <BlockThreeBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
