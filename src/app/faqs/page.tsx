import IconImage from "@/app/ui/IconImage";
import FaqsBg from "@/app/ui/background/FaqsBg";
import Image from "next/image";
import Link from "next/link";
import DesktopPageNavigation from "../ui/DesktopPageNavigation";
import siteContent from "@/data/siteContent";

const faqsContent = siteContent.faqsContent;

export default function Faqs() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col flex-1 lg:flex-row">
        <DesktopPageNavigation
          prevPath="/how-to-start"
          isLastPage={true} /* nextPath="/staking" */
        />

        <div className="flex flex-1 w-full">
          <div className="flex flex-col w-full gap-[32px] z-20 text-center lg:text-start items-center lg:items-start">
            <h2 className="text-[2rem] text-white mt-8">
              {faqsContent.header}
            </h2>
            <h1 className="text-[#E8B14B] text-5xl max-w-[578px]">
              {faqsContent.title}
            </h1>

            <div className="flex flex-col gap-5 w-[491px] max-w-full text-start">
              {faqsContent.faqItems.map((item, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <div className="flex gap-4">
                      <h2 className="text-white text-base leading-6">Q</h2>
                      <h2 className="text-white text-base leading-6">
                        {item.question}
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-[#E38539] text-base leading-6">A</h2>
                      <h2 className="text-[#E38539] text-base leading-6">
                        {item.answer}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden flex static lg:absolute top-[50%] z-40 w-full mt-8">
          <Link
            href="/how-to-start"
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
          {/* <Link
            href="/staking"
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
          </Link> */}
        </div>

        <div className="flex flex-1 w-full mt-auto mb-[-24px] justify-center">
          <div className="overflow-hidden w-[458px] h-[545px]">
            <Image
              src="/icons/character-6.svg"
              width={458}
              height={545}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full overflow-hidden flex justify-end">
        <FaqsBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
