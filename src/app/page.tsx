import clsx from "clsx";
import Link from "next/link";
import IconImage from "./ui/IconImage";
import TriangelBox from "./ui/TriangelBox";
import DesktopPageNavigation from "./ui/DesktopPageNavigation";
import HomeBg from "./ui/background/HomeBg";
import siteContent from "@/data/siteContent";
const homeContent = siteContent.homeContent;

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-7xl w-full p-6 mx-auto gap-10 lg:gap-0 z-20 lg:px-8 items-center lg:justify-between lg:my-[91px]">
        <DesktopPageNavigation
          isFirstPage={true}
          isLastPage={false}
          nextPath="/blocks"
        />
        {/* Header Section */}
        <div className="flex flex-col flex-1 w-full items-center text-center">
          <div className="flex flex-col w-[611px] gap-10 lg:gap-[32px] z-20 max-w-full items-center lg:items-start lg:text-start">
            <h1 className="text-[#E8B14B] text-5xl max-w-[506px]">
              {homeContent.header}
            </h1>
            <div>
              <h2 className="text-[#E38539] text-xl leading-6">
                {homeContent.subHeader}
              </h2>
              <h3 className="text-white text-xl leading-6">
                {homeContent.description}
              </h3>
            </div>

            <div className="relative w-[552px] flex justify-center mt-[52px] max-w-full items-center">
              <div className="flex flex-col lg:items-center gap-[21px] text-center w-full items-center">
                <h2 className="text-[#E8B14B] text-xl w-[346px] max-w-full">
                  {homeContent.stats.players}
                </h2>
                <a
                  className="px-[40px] py-[8px] bg-[#E8B14B] text-[#112030] text-xl rounded-md flex items-center justify-center gap-3 w-[337px] max-w-full"
                  href={homeContent.stats.ctaButtonLink}
                  target="_blank"
                >
                  <span>{homeContent.stats.ctaButton}</span>
                  <IconImage
                    iconName="play-icon-outline.svg"
                    width={48}
                    height={48}
                    alt=""
                  />
                </a>
                <h3 className="text-white text-xl w-[462px] max-w-full">
                  {homeContent.stats.ctaDescription}
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

        {/* Features Section */}
        <div className="relative lg:static flex flex-1 h-full w-full mt-auto justify-end">
          <div className="lg:hidden max-w-full flex flex-col md:w-[704px] lg:w-full">
            <TriangelBox>
              <h5 className="text-[#E8B14B] text-base max-w-full">
                {homeContent.features.title}
              </h5>
              <ul className="text-white text-xs">
                {homeContent.features.list.map((feature, index) => (
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
            {homeContent.features.title}
          </h5>
          <ul className="text-white text-xs">
            {homeContent.features.list.map((feature, index) => (
              <li key={index}>
                <span className="text-[#E8B14B]"> • {feature.highlight}</span>{" "}
                {feature.description}
              </li>
            ))}
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
        <HomeBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
