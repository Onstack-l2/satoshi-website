import DesktopPageNavigation from "@/app/ui/DesktopPageNavigation";
import IconImage from "@/app/ui/IconImage";
import TriangelBox from "@/app/ui/TriangelBox";
import BlockTwoBg from "@/app/ui/background/BlockTwoBg";
import Image from "next/image";
import Link from "next/link";
import { blockTwoContent } from "@/data/siteContent.json";

const PieChartBox = () => {
  return (
    <div className="flex overflow-x-scroll w-full md:mx-0 lg:max-w-[588px]">
      <div className="flex h-fit w-[819px] items-center py-5">
        <div className="flex flex-col gap-[10px] items-end text-end">
          {blockTwoContent.pieChart.items.slice(0, 3).map((item) => (
            <div className="flex flex-col gap-1 w-[232px]" key={item.title}>
              <span className="text-white text-base">{item.title}</span>
              <span className="text-[#E38539] text-xs">{item.description}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-[422px] relative h-full self-stretch">
          <IconImage
            iconName="pie-chart.svg"
            width={120}
            height={134}
            className="mt-[42px] mr-[19px]"
          />
          <span className="text-white text-base absolute top-[34px] left-[76px]">
            {blockTwoContent.pieChart.items[0].percentage}
          </span>
          <div className="absolute top-[44px] left-[20px] w-[40px] flex items-center">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[105px] left-[46px]">
            {blockTwoContent.pieChart.items[1].percentage}
          </span>
          <div className="absolute top-[115px] left-[20px] w-[15px] flex items-center">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[175px] left-[58px]">
            {blockTwoContent.pieChart.items[2].percentage}
          </span>
          <div className="absolute top-[185px] left-[20px] w-[27px] flex items-center">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[21px] right-[112px]">
            {blockTwoContent.pieChart.items[3].percentage}
          </span>
          <div className="absolute top-[15px] right-[20px] w-[70px] flex items-center rotate-[-11deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[93px] right-[59px]">
            {blockTwoContent.pieChart.items[4].percentage}
          </span>
          <div className="absolute top-[91px] right-[20px] w-[27px] flex items-center rotate-[-17deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[152px] right-[69px]">
            {blockTwoContent.pieChart.items[5].percentage}
          </span>
          <div className="absolute top-[157px] right-[20px] w-[29px] flex items-center rotate-[-13deg]">
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
            <div className="flex-1 h-0 border-[0.5px] border-white"></div>
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-[white]"></div>
          </div>

          <span className="text-white text-base absolute top-[196px] left-[136px]">
            {blockTwoContent.pieChart.items[6].percentage}
          </span>
          <div className="absolute top-[212px] right-[20px] w-[110px] flex items-center rotate-[5deg]">
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
          <div className="relative h-fit w-[400px] sm:w-[573px] max-w-full text-left flex-col flex mt-6">
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
