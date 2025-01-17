import DesktopPageNavigation from "@/app/ui/DesktopPageNavigation";
import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import DefiBg from "@/app/ui/background/DefiBg";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";

const blockDefiContent = siteContent.blockDefiContent;

export default function BlockDefi() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1">
        <DesktopPageNavigation
          prevPath="/blocks/three"
          nextPath="/how-to-start"
        />

        <div className="flex flex-1 w-full">
          <div className="flex flex-col w-full gap-[32px] z-20 lg:text-start items-center text-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-10">
              {blockDefiContent.header}
            </h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[578px]">
              {blockDefiContent.title}
            </h1>

            <div className="flex gap-[26px]">
              <div className="flex flex-col gap-[10px] w-[371px]">
                {blockDefiContent.defiItems.map((item, index) => (
                  <div className="flex flex-col gap-1 w-[371px]" key={index}>
                    <span className="text-white text-base">{item.title}</span>
                    <span className="text-[#E38539] text-xs">
                      {item.description}
                    </span>
                  </div>
                ))}
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
          <div className="h-fit w-full max-w-[502px] text-left relative flex flex-col">
            <div className="block sm:hidden w-[573px] mt-6 z-10 max-w-full mb-5">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-center relative z-10">
                {blockDefiContent.characterSpeech}
              </h3>
            </div>

            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base">
                {blockDefiContent.features.title}
              </h5>
            </TriangelBox>

            <div className="hidden sm:block w-[573px] mt-6 z-10 max-w-full">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-left relative z-10">
                {blockDefiContent.characterSpeech}
              </h3>
            </div>

            <div className="relative w-340px sm:w-[463px] h-[446px] sm:ml-auto mt-[-140px]">
              <Image
                src="/icons/character-3.svg"
                width={463}
                height={446}
                alt=""
                className="absolute right-[-40px] bottom-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <DefiBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
