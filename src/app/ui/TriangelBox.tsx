const Triangel = () => {
  return (
    <div className="relative flex w-[89px] h-[52px]">
      <div className="w-[94px] absolute top-0 right-0 bg-[#855D38] z-20 h-[17px] mr-[-4px] mt-[-1px]"></div>
      <div
        style={{
          width: 0,
          height: 0,
          borderBottomRightRadius: "6px",
          borderBottom: "54px solid transparent",
          borderRight: "91px solid #E8B14B",
          zIndex: 10,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          borderBottomRightRadius: "4px",
          borderBottom: "52px solid transparent",
          borderRight: "89px solid #855D38",
          zIndex: 11,
          paddingLeft: "1px",
        }}
      ></div>
    </div>
  );
};

export default function TriangelBox({
  children,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="bg-[#855D38] relative border border-1 border-[#E8B14B] rounded-md px-[20px] pt-[15px] pb-[24px] w-fit z-20">
      {children}
      <div className="absolute bottom-[-36px] right-[109px]">
        <Triangel />
      </div>
    </div>
  );
}
