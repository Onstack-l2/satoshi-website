import Link from "next/link";
import IconImage from "../ui/IconImage";
import BlocksBg from "../ui/background/BlocksBg";
import { genesisBlockContent } from "@/data/siteContent.json";

export default function GenesisBlock() {
  return (
    <>
      <div className="max-w-7xl w-full p-6 mx-auto z-20 flex items-center flex-col">
        <div className="flex flex-col max-w-full w-[958px] gap-[32px] z-20 text-center items-center">
          <h2 className="text-[2rem] text-white mt-8">
            {genesisBlockContent.title}
          </h2>
          <h1 className="text-[#E8B14B] text-5xl w-[518px] max-w-full">
            {genesisBlockContent.subtitle}
          </h1>
          <div>
            {genesisBlockContent.description.map((item, index) => (
              <h2
                key={index}
                className={`text-xl leading-6 ${item.color === "white" ? "text-white" : "text-[#E38539]"} mt-4`}
              >
                {item.text}
              </h2>
            ))}
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
        <BlocksBg className="!h-[calc(100vh - 170px)] !w-full" />
      </div>
    </>
  );
}
