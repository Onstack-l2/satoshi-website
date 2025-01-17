import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import BlockOneBg from "@/app/ui/background/BlockOneBg";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import Image from "next/image";
import DesktopPageNavigation from "@/app/ui/DesktopPageNavigation";

const blockOneContent = siteContent.blockOneContent;

export default function BlockOne() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col flex-1">
        <DesktopPageNavigation prevPath="/blocks" nextPath="/blocks/two" />

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

          <div className="w-[573px] max-w-full text-left relative mt-auto">
            <div className="w-[573px] sm:hidden mt-6 z-10 max-w-full mb-5 ">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-center relative z-10">
                {blockOneContent.characterSpeech}
              </h3>
            </div>
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base max-w-full">
                {blockOneContent.features.title}
              </h5>
              <ul className="text-white text-xs">
                {blockOneContent.features.list.map((feature, index) => (
                  <li key={index}>
                    <span className="text-[#E8B14B]">
                      {" "}
                      • {feature.highlight}
                    </span>{" "}
                    {feature.description}
                  </li>
                ))}
              </ul>
            </TriangelBox>

            <div className="hidden sm:block w-[573px] mt-6 z-10 max-w-full">
              <h3 className="text-white text-xl leading-6 sm:w-[343px] max-w-full text-left relative z-10">
                {blockOneContent.characterSpeech}
              </h3>
            </div>

            <div className="w-full overflow-hidden mb-[-24px] mt-[0] sm:mt-[-150px] h-[365px] relative">
              <Image
                src="/icons/character-2.svg"
                width={400}
                height={365}
                alt=""
                className="ml-auto absolute bottom-0 sm:relative"
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
