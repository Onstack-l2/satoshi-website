import IconImage from "@/app/ui/IconImage";
import HowToStartBg from "@/app/ui/background/HowToStartBg";
import Image from "next/image";
import Link from "next/link";
import DesktopPageNavigation from "../ui/DesktopPageNavigation";
import { howToStartContent } from "@/data/siteContent.json";

const ButtonActions = () => {
  return (
    <div className="flex gap-[10px] flex-col sm:flex-row w-full justify-center lg:justify-start">
      <a
        className="px-[20px] py-[9px] bg-[#E8B14B] text-[#112030] rounded-md whitespace-nowrap text-center"
        href={howToStartContent.stats.ctaButtonLeft.link}
      >
        {howToStartContent.stats.ctaButtonLeft.text}
      </a>
      <a
        className="px-[20px] py-[9px] bg-transparent  border border-1 border-[#E8B14B] rounded-md text-[#E8B14B] whitespace-nowrap text-center"
        href={howToStartContent.stats.ctaButtonRight.link}
      >
        {howToStartContent.stats.ctaButtonRight.text}
      </a>
    </div>
  );
};

export default function HowToStart() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1">
        <DesktopPageNavigation prevPath="/blocks/defi" nextPath="/faqs" />

        <div className="flex w-full flex-1">
          <div className="flex flex-col w-full gap-[32px] z-20 lg:text-start items-center text-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-12">
              {howToStartContent.header}
            </h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[578px]">
              {howToStartContent.title}
            </h1>

            <div className="flex flex-col gap-1 w-[371px]">
              <h2 className="text-[#E38539] text-xl leading-6">
                {howToStartContent.stats.ctaTitle}
              </h2>
              {/* <span className="text-[#E38539] text-xs">
                {howToStartContent.stats.ctaDescription}
              </span> */}
            </div>

            <div className="flex gap-[26px]">
              <div className="flex flex-col gap-[34px] items-start text-end w-[70px]">
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {howToStartContent.statges[0].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {howToStartContent.statges[1].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div>
                <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {howToStartContent.statges[2].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[32px]"></span>
                </div>
                {/* <div className="flex flex-col gap-1 w-[70px]">
                  <span className="text-white text-base">
                    {howToStartContent.statges[3].phase}
                  </span>
                  <span className="text-transparent text-xs min-h-[48px]"></span>
                </div> */}
              </div>

              <div className="w-[5.5px] h-[225px] flex items-center flex-col mt-[9px]">
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                <div className="w-[0] h-[127px] border-[0.5px] border-white"></div>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                <div className="h-[125px] border-[0.5px] border-white"></div>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
                {/* <div className="h-[105px] border-[0.5px] border-white"></div>
                <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div> */}
              </div>

              <div className="flex flex-col gap-[34px] items-start text-start sm:w-[255px]">
                {howToStartContent.statges.map((item, index) => (
                  <div className="flex flex-col gap-1 sm:w-[255px]" key={index}>
                    <span className="text-[#E38539] text-xs whitespace-pre-line min-h-[46px]">
                      {item.description}
                    </span>
                    <span className="text-[#E8B14B] text-base opacity-0">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ButtonActions />
          </div>
        </div>
        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-5">
          <Link
            href="/blocks/defi"
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
            href="/faqs"
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
        <HowToStartBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
