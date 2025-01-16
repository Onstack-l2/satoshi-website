import Link from "next/link";
import IconImage from "./IconImage";

interface DesktopPageNavigationProps {
  isFirstPage?: boolean;
  isLastPage?: boolean;
  prevPath?: string;
  nextPath?: string;
}

const DesktopPageNavigation: React.FC<DesktopPageNavigationProps> = ({
  isFirstPage = false,
  isLastPage = false,
  prevPath = "",
  nextPath = "",
}) => {
  return (
    <div
      className="static hidden lg:flex lg:absolute top-[50%] z-40 w-full left-0"
      style={{
        transform: "translateY(-50%)",
      }}
    >
      {!isFirstPage && prevPath && (
        <Link href={prevPath} className="relative flex items-center">
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
            className="mb-10"
            flipHorizontal={true}
          />
        </Link>
      )}
      {!isLastPage && nextPath && (
        <Link href={nextPath} className="relative flex items-center ml-auto">
          <IconImage
            iconName="arrow-icon-bg.svg"
            width={70}
            height={80}
            className="mb-10"
          />
          <IconImage
            iconName="play-icon.svg"
            width={119}
            height={119}
            alt=""
            className="mt-5"
          />
        </Link>
      )}
    </div>
  );
};

export default DesktopPageNavigation;
