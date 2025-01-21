"use client";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import IconImage from "./IconImage";
import clsx from "clsx";
import Link from "next/link";
// import siteContent from "@/data/siteContent";
// const headerButtons = siteContent.headerButtons;

// const ButtonActions = ({ className }: { className?: string }) => {
//   return (
//     <div className={clsx("flex gap-[10px] h-[40px]", className)}>
//       <a
//         className="px-[20px] py-[9px] bg-[#E8B14B] text-[#112030] rounded-md"
//         href={headerButtons.ctaButtonLeft.link}
//         target="_blank"
//       >
//         {headerButtons.ctaButtonLeft.text}
//       </a>
//       <a
//         className="px-[20px] py-[9px] bg-transparent  border border-1 border-[#E8B14B] rounded-md text-[#E8B14B]"
//         href={headerButtons.ctaButtonRight.link}
//         target="_blank"
//       >
//         {headerButtons.ctaButtonRight.text}
//       </a>
//     </div>
//   );
// };

const Logo = () => {
  return (
    <Link href="/" className="flex gap-[8.61px] items-center">
      <IconImage iconName="logo-img.svg" width={38.72} height={38.72} alt="" />
      <div className="flex flex-col gap-[2.81px] justify-start">
        <IconImage
          iconName="logo-text-satoshi.svg"
          width={80.67}
          height={15.04}
        />
        <IconImage
          iconName="logo-text-miner.svg"
          width={61.53}
          height={10.54}
        />
      </div>
    </Link>
  );
};

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  const toggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#112030]">
      <nav
        className="mx-auto flex max-w-7xl w-full items-center justify-between p-6 lg:px-8  h-[88px]"
        aria-label="Global"
      >
        <Logo />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#888F97]"
            onClick={toggleOpenMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={clsx("text-sm/6 font-semibold text-[#888F97]", {
              "text-[#E8B14B]": pathname === "/",
            })}
          >
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={clsx(
                "flex items-center gap-x-1 text-sm/6 font-semibold text-[#888F97]",
                {
                  "text-[#E8B14B]": pathname.includes("/blocks"),
                }
              )}
              aria-expanded={false}
              onClick={toggleMenu}
            >
              Blocks
              <svg
                className={clsx(
                  "size-5 flex-none text-gray-400",
                  isExpanded ? "rotate-180" : ""
                )}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div
              className={clsx(
                "absolute -left-8 top-full mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-[#112030] shadow-lg ring-1 ring-[#888F97] z-40 transition ease-out duration-200",
                isExpanded
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-1 pointer-events-none"
              )}
            >
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 ">
                  <div className="flex-auto">
                    <Link
                      href="/blocks"
                      className={clsx("block font-semibold text-[#888F97]", {
                        "text-[#E8B14B]": pathname === "/blocks",
                      })}
                    >
                      Genesis Block
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 ">
                  <div className="flex-auto">
                    <Link
                      href="/blocks/one"
                      className={clsx("block font-semibold text-[#888F97]", {
                        "text-[#E8B14B]": pathname === "/blocks/one",
                      })}
                    >
                      Block One
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 ">
                  <div className="flex-auto">
                    <Link
                      href="/blocks/two"
                      className={clsx("block font-semibold text-[#888F97]", {
                        "text-[#E8B14B]": pathname === "/blocks/two",
                      })}
                    >
                      Block Two
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 ">
                  <div className="flex-auto">
                    <Link
                      href="/blocks/three"
                      className={clsx("block font-semibold text-[#888F97]", {
                        "text-[#E8B14B]": pathname === "/blocks/three",
                      })}
                    >
                      Block Three
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 ">
                  <div className="flex-auto">
                    <Link
                      href="/blocks/defi"
                      className={clsx("block font-semibold text-[#888F97]", {
                        "text-[#E8B14B]": pathname === "/blocks/defi",
                      })}
                    >
                      Defi
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/how-to-start"
            className={clsx("text-sm/6 font-semibold text-[#888F97]", {
              "text-[#E8B14B]": pathname === "/how-to-start",
            })}
          >
            How to start
          </Link>
          <Link
            href="/faqs"
            className={clsx("text-sm/6 font-semibold text-[#888F97]", {
              "text-[#E8B14B]": pathname === "/faqs",
            })}
          >
            Faqs
          </Link>
          {/* <Link
            href="/staking"
            className={clsx("text-sm/6 font-semibold text-[#888F97]", {
              "text-[#E8B14B]": pathname === "/staking",
            })}
          >
            Staking
          </Link> */}
        </div>
        {/* <div className="hidden lg:flex lg:justify-end">
          <ButtonActions className="w-full" />
        </div> */}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        className={clsx("lg:hidden", isOpenMenu ? "block" : "hidden")}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div
          className="fixed inset-0 z-40 bg-opacity-25 bg-black"
          onClick={toggleOpenMenu}
        ></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#112030] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#888F97]">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#888F97]"
              onClick={toggleOpenMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={clsx(
                    "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#888F97] ",
                    { "text-[#E8B14B]": pathname === "/" }
                  )}
                  onClick={onCloseMenu}
                >
                  Home
                </Link>
                <div className="-mx-3">
                  <button
                    type="button"
                    className={clsx(
                      "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-[#888F97]",
                      {
                        "text-[#E8B14B]": pathname.includes("/blocks"),
                      }
                    )}
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                    onClick={toggleMobileMenu}
                  >
                    Blocks
                    {/* <!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  --> */}
                    <svg
                      className={clsx(
                        "size-5 flex-none",
                        isMobileExpanded ? "rotate-180" : ""
                      )}
                      viewBox="0 0 20 20"
                      fill="#888F97"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                  <div
                    className={clsx(
                      "mt-2 space-y-2",
                      isMobileExpanded ? "block" : "hidden"
                    )}
                    id="disclosure-1"
                  >
                    <Link
                      href="/blocks"
                      className={clsx(
                        "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-[#888F97] ",
                        { "text-[#E8B14B]": pathname === "/blocks" }
                      )}
                      onClick={onCloseMenu}
                    >
                      Genesis Block
                    </Link>
                    <Link
                      href="/blocks/one"
                      className={clsx(
                        "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-[#888F97] ",
                        {
                          "text-[#E8B14B]": pathname === "/blocks/one",
                        }
                      )}
                      onClick={onCloseMenu}
                    >
                      Block One
                    </Link>
                    <Link
                      href="/blocks/two"
                      className={clsx(
                        "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-[#888F97] ",
                        {
                          "text-[#E8B14B]": pathname === "/blocks/two",
                        }
                      )}
                      onClick={onCloseMenu}
                    >
                      Block Two
                    </Link>
                    <Link
                      href="/blocks/three"
                      className={clsx(
                        "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-[#888F97] ",
                        {
                          "text-[#E8B14B]": pathname === "/blocks/three",
                        }
                      )}
                      onClick={onCloseMenu}
                    >
                      Block Three
                    </Link>
                    <Link
                      href="/blocks/defi"
                      className={clsx(
                        "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-[#888F97] ",
                        {
                          "text-[#E8B14B]": pathname === "/blocks/defi",
                        }
                      )}
                      onClick={onCloseMenu}
                    >
                      Defi
                    </Link>
                  </div>
                </div>
                <Link
                  href="/how-to-start"
                  className={clsx(
                    "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#888F97] ",
                    { "text-[#E8B14B]": pathname === "/how-to-start" }
                  )}
                  onClick={onCloseMenu}
                >
                  How to start
                </Link>
                <Link
                  href="/faqs"
                  className={clsx(
                    "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#888F97] ",
                    { "text-[#E8B14B]": pathname === "/faqs" }
                  )}
                  onClick={onCloseMenu}
                >
                  Faqs
                </Link>
                {/* <Link
                  href="/staking"
                  className={clsx(
                    "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#888F97]",
                    { "text-[#E8B14B]": pathname === "/staking" }
                  )}
                  onClick={onCloseMenu}
                >
                  Staking
                </Link>
                <ButtonActions /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
