import Image from "next/image";
import IconImage from "../IconImage";
import clsx from "clsx";

const ImageLine = ({ className }) => {
  return (
    <div className={clsx("w-[1444px]", className)}>
      <Image src="/icons/line.svg" alt="" height={75} width={2888} />
    </div>
  );
};

const LinesBackground = () => {
  return (
    <div className="z-0 absolute top-0 h-fit w-full flex">
      <div className="relative w-full h-fit mt-[-5px]">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          return (
            <ImageLine
              key={num}
              className={clsx(
                index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
              )}
            />
          );
        })}
      </div>
      <div className="relative w-full h-fit ">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          return (
            <ImageLine
              key={num}
              className={clsx(
                index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
              )}
            />
          );
        })}
      </div>
      <div className="relative w-full h-fit mt-[5px]">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          return (
            <ImageLine
              key={num}
              className={clsx(
                index !== [1, 2, 3, 4, 5, 6].length - 1 && "mb-[-38px]"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function BlockTwoBg({ className }) {
  return (
    <div
      className={clsx(
        "w-[1444px] relative h-[712px] z-0 py-[20px] mt-[44px] lg:mt-0",
        className
      )}
    >
      <IconImage
        iconName="btc-icon-bg.svg"
        width={90}
        height={89}
        className="absolute top-[83px] left-[22px] hidden xl-custom:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={64}
        height={67}
        className="absolute top-[346px] left-[22px] hidden xl:block"
      />
      <IconImage
        iconName="money-icon-bg.svg"
        width={95}
        height={121}
        className="absolute top-[78px] left-[45%]  hidden lg:block"
      />

      <IconImage
        iconName="3coins-icon-bg.svg"
        width={81}
        height={84}
        className="absolute top-[65px] right-[145px]  hidden sm:block"
      />

      <IconImage
        iconName="bottle-icon-bg.svg"
        width={71}
        height={93}
        className="absolute top-[197px] right-[304px]"
      />

      <IconImage
        iconName="btc-icon-bg.svg"
        width={90}
        height={89}
        className="absolute bottom-[86px] right-[351px]"
      />

      <LinesBackground />
    </div>
  );
}
