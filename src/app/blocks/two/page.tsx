import DesktopPageNavigation from "@/app/ui/DesktopPageNavigation";
import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import BlockTwoBg from "@/app/ui/background/BlockTwoBg";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";

const blockTwoContent = siteContent.blockTwoContent;

const PieChartBox = () => {
  return (
    <div className="flex overflow-x-scroll w-full md:mx-0 lg:max-w-[588px]">
      <div className="flex h-fit w-[819px] items-center py-5 lg:absolute">
        <div className="flex flex-col gap-[10px] items-end text-end">
          {blockTwoContent.pieChart.items.slice(0, 3).map((item) => (
            <div className="flex flex-col gap-1 w-[232px]" key={item.title}>
              <span className="text-white text-base">{item.title}</span>
              <span className="text-[#E38539] text-xs">{item.description}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-[422px] relative h-full self-stretch">
          <div
            style={{
              width: "120px",
              height: "120px",
              background:
                "conic-gradient(#E3853A 0% 14.29%, #FDAB69 14.29% 28.57%, #EF9D5C 28.57% 42.86%, #D69860 42.86% 57.14%, #FDAB69 57.14% 71.43%, #D69860 71.43% 85.71%, #EF9D5C 85.71% 100%)",
              borderRadius: "50%",
              position: "relative",
            }}
            className="mt-[96px] mr-[19px]"
          ></div>
          <span className="text-white text-base absolute top-[61px] left-[99px]">
            {blockTwoContent.pieChart.items[0].percentage}
          </span>
          <div className="absolute top-[66px] left-[20px] w-[60px] flex items-center rotate-[6deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[123px] left-[46px]">
            {blockTwoContent.pieChart.items[1].percentage}
          </span>
          <div className="absolute top-[140px] left-[20px] w-[15px] flex items-center rotate-[-15px]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[193px] left-[64px]">
            {blockTwoContent.pieChart.items[2].percentage}
          </span>
          <div className="absolute top-[212px] left-[20px] w-[27px] flex items-center rotate-[-14deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[63px] right-[108px]">
            {blockTwoContent.pieChart.items[3].percentage}
          </span>
          <div className="absolute top-[36px] right-[20px] w-[80px] flex items-center rotate-[-27deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[121px] right-[59px]">
            {blockTwoContent.pieChart.items[4].percentage}
          </span>
          <div className="absolute top-[114px] right-[20px] w-[27px] flex items-center rotate-[-29deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[197px] right-[78px]">
            {blockTwoContent.pieChart.items[5].percentage}
          </span>
          <div className="absolute top-[184px] right-[20px] w-[44px] flex items-center rotate-[-27deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[229px] left-[131px]">
            {blockTwoContent.pieChart.items[6].percentage}
          </span>
          <div className="absolute top-[239px] right-[20px] w-[115px] flex items-center rotate-[0deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] items-start  text-start">
          {blockTwoContent.pieChart.items.slice(3).map((item) => (
            <div className="flex flex-col gap-1 w-[276px]" key={item.title}>
              <span className="text-white text-base">{item.title}</span>
              <span className="text-[#E38539] text-xs">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function BlockTwo() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex flex-col lg:flex-row flex-1 items-start">
        <DesktopPageNavigation
          prevPath="/blocks/one"
          nextPath="/blocks/three"
        />
        <div className="flex flex-col w-full gap-[32px] mt-[30px] flex-1 z-20 text-center items-center lg:items-start lg:text-start">
          <h2 className="text-[2rem] text-white">{blockTwoContent.header}</h2>
          <h1 className="text-[#E8B14B] text-5xl max-w-[518px]">
            {blockTwoContent.title}
          </h1>
          <h3 className="text-white text-xl leading-6">
            {blockTwoContent.subtitle}
          </h3>

          <h2 className="text-[#E38539] text-xl leading-6">
            {blockTwoContent.description}
          </h2>

          <PieChartBox />
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
              {blockTwoContent.characterSpeech}
            </h3>
          </div>
          <div className="relative h-fit w-[400px] sm:w-[573px] max-w-full text-left flex-col flex mt-6 z-10">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base max-w-full">
                {blockTwoContent.features.title}
              </h5>
              <ul className="text-white text-xs">
                {blockTwoContent.features.list.map((feature, index) => (
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
        <BlockTwoBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
