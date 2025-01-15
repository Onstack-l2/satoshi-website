import Image from "next/image";
import React, { CSSProperties } from "react";

interface IconImageProps {
  src?: string;
  iconName?: string;
  alt?: string;
  width?: number;
  height?: number;
  rotate?: number;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  className?: string;
  style?: CSSProperties;
}

const IconImage = ({
  src,
  iconName = "",
  alt = "",
  width = 50,
  height = 50,
  rotate = 0,
  flipHorizontal = false,
  flipVertical = false,
  className = "",
  style = {},
}: IconImageProps) => {
  const transformStyles: CSSProperties = {
    transform: `
      rotate(${rotate}deg)
      scaleX(${flipHorizontal ? -1 : 1})
      scaleY(${flipVertical ? -1 : 1})
    `,
  };

  const combinedStyles: CSSProperties = {
    width,
    height,
    overflow: "hidden",
    ...transformStyles,
    ...style,
  };

  return (
    <div className={className} style={combinedStyles}>
      <Image
        src={iconName ? `/icons/${iconName}` : src || ""}
        alt={alt}
        width={width}
        height={height}
        unoptimized
      />
    </div>
  );
};

export default IconImage;
