"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const usePathName = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center transition-all duration-500 ease-in-out ${
          sticky
            ? `
              fixed z-[9999]
              border-b border-[#1E3A8A]/15
              bg-[#071127]/92 shadow-[0_18px_70px_rgba(2,8,23,0.32)]
              backdrop-blur-2xl
            `
            : `
              absolute
              border-b border-white/10
              bg-[#071127]/78 backdrop-blur-xl
            `
        }`}
      >
        {/* LIONXE framework top identity line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 h-px
            bg-gradient-to-r from-transparent via-[#004DFD]/60 to-transparent
          "
        />

        {/* Subtle framework ambient glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-0 h-28 w-[560px]
            -translate-x-1/2 rounded-full bg-[#1E3A8A]/20 blur-3xl
          "
        />

        <div className="container mx-auto px-4 w-full">
          {/* Symmetric vertical padding applied here (py-3.5 lg:py-4.5) to ensure exact vertical centering */}
          <div className="relative flex items-center justify-between w-full py-3.5 lg:py-4.5">
            
            {/* LEFT COLUMN: LOGO */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                aria-label="Go to LIONXE homepage"
                className="
                  group relative flex items-center
                  transition-transform duration-300 hover:scale-[1.01]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-3 -z-10 rounded-2xl
                    bg-[#004DFD]/10 opacity-0 blur-xl
                    transition-opacity duration-300 group-hover:opacity-100
                  "
                />

                <div
                  className="
                    flex h-[48px] w-[170px] items-center justify-center
                    overflow-hidden rounded-xl
                    border border-white/10 bg-white/[0.06] px-3
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl transition-all duration-300

                    group-hover:border-[#004DFD]/35
                    group-hover:bg-white/[0.09]
                    group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_42px_rgba(0,77,253,0.16)]

                    sm:h-[52px] sm:w-[190px]
                    lg:h-[54px] lg:w-[210px]
                  "
                >
                  <Image
                    src="/logoForHeader.png"
                    alt="LIONXE"
                    width={280}
                    height={90}
                    priority
                    className="
                      h-auto max-h-[38px] w-full object-contain
                      transition-all duration-300
                      sm:max-h-[72px]
                      lg:max-h-[80px]
                    "
                  />
                </div>
              </Link>
            </div>

            {/* CENTER COLUMN: DESKTOP NAVIGATION */}
            <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-center px-6">
              <nav id="navbarCollapse" className="navbar">
                <ul
                  className="
                    flex items-center justify-center gap-1.5 rounded-[28px]
                    border border-white/10 bg-white/[0.045] px-3 py-1.5
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_42px_rgba(0,0,0,0.16)]
                    backdrop-blur-2xl
                  "
                >
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative font-semibold flex items-center">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          prefetch={true}
                          className={`
                            relative flex items-center justify-center overflow-hidden
                            rounded-full border px-4 py-2 text-base
                            transition-all duration-300 ease-in-out
                            ${
                              usePathName === menuItem.path
                                ? `
                                  border-[#004DFD]/40
                                  bg-[#0F1B3D]
                                  text-white
                                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,77,253,0.18)]
                                `
                                : `
                                  border-transparent text-slate-300
                                  hover:border-white/10
                                  hover:bg-white/[0.06]
                                  hover:text-white
                                `
                            }
                          `}
                        >
                          <span className="relative z-10">{menuItem.title}</span>

                          {usePathName === menuItem.path ? (
                            <span className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#004DFD] to-transparent" />
                          ) : (
                            <span
                              className="
                                absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2
                                bg-gradient-to-r from-transparent via-[#004DFD] to-transparent
                                transition-all duration-300 group-hover:w-2/3
                              "
                            />
                          )}
                        </Link>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleSubmenu(index)}
                            className={`
                              flex cursor-pointer items-center justify-between
                              rounded-full border px-4 py-2
                              text-base font-semibold transition-all duration-300
                              ${
                                menuItem.title === "Framework"
                                  ? "border-[#004DFD]/20 bg-[#004DFD]/5 text-white shadow-[0_0_15px_rgba(0,77,253,0.1)] hover:bg-[#004DFD]/10 hover:border-[#004DFD]/40"
                                  : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                              }
                            `}
                          >
                            <span className="relative z-10 flex items-center gap-1.5">
                              {menuItem.title}
                              {/* Sleek Strategic LIONXE Badge for Framework item */}
                              {menuItem.title === "Framework" && (
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004DFD] opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004DFD]"></span>
                                </span>
                              )}
                            </span>

                            <span className="pl-2 transition-transform duration-300 group-hover:rotate-180">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 25 24"
                                className="text-current"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>

                          <div
                            className={`
                              submenu relative left-0 top-full rounded-2xl
                              border border-white/10 bg-[#071127]/95 p-3
                              shadow-[0_24px_90px_rgba(0,0,0,0.45)]
                              backdrop-blur-2xl transition-all duration-300
                              lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[292px]
                              lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full
                              lg:group-hover:opacity-100
                              ${
                                openIndex === index
                                  ? "block opacity-100"
                                  : "hidden opacity-0"
                              }
                            `}
                          >
                            <div
                              aria-hidden="true"
                              className="
                                pointer-events-none absolute inset-x-6 top-0 h-px
                                bg-gradient-to-r from-transparent via-[#004DFD]/60 to-transparent
                              "
                            />

                            {menuItem.submenu.map((submenuItem, submenuIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuIndex}
                                prefetch={true}
                                className="
                                  group/item relative flex items-center rounded-xl border border-transparent
                                  px-4 py-3 text-sm font-semibold text-slate-300
                                  transition-all duration-200
                                  hover:border-[#004DFD]/25 hover:bg-[#0F1B3D] hover:text-white
                                "
                              >
                                <span
                                  className="
                                    mr-3 h-1.5 w-1.5 rounded-full bg-[#004DFD]
                                    shadow-[0_0_12px_rgba(0,77,253,0.8)]
                                    transition-all duration-200
                                    group-hover/item:scale-125
                                  "
                                />
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* RIGHT COLUMN: ACTION CONTROLS & MOBILE BUTTON */}
            <div className="flex items-center justify-end flex-shrink-0 gap-4">
              
              {/* Premium Desktop Contact Button matched to LIONXE #004DFD */}
              <Link
                href="/contact"
                className="
                  hidden lg:inline-flex items-center justify-center rounded-full
                  bg-[#004DFD] px-6 py-2.5 text-base font-semibold text-white
                  shadow-[0_4px_20px_rgba(0,77,253,0.3)]
                  border border-white/10
                  transition-all duration-300 
                  hover:bg-[#003ec9] hover:scale-[1.02]
                  hover:shadow-[0_6px_26px_rgba(0,77,253,0.45)]
                "
              >
                Contact
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="
                  group block rounded-xl border border-[#004DFD]/25
                  bg-[#0B1733] px-3 py-2
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  hover:border-[#004DFD]/45 hover:bg-[#111F45]
                  focus:ring-2 focus:ring-[#004DFD]/40
                  lg:hidden
                "
              >
                <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                  <span
                    className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                      navbarOpen
                        ? "rotate-45 bg-[#7fa6ff]"
                        : "-translate-y-1.5 group-hover:bg-[#7fa6ff]"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                      navbarOpen
                        ? "opacity-0"
                        : "opacity-100 group-hover:bg-[#7fa6ff]"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                      navbarOpen
                        ? "-rotate-45 bg-[#7fa6ff]"
                        : "translate-y-1.5 group-hover:bg-[#7fa6ff]"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div
              className={`
                absolute right-0 top-full z-30 max-h-[80vh] w-[310px]
                origin-top-right overflow-y-auto rounded-2xl border
                border-[#1E3A8A]/50 bg-[#071127] px-5 py-5
                shadow-[0_28px_100px_rgba(0,0,0,0.75)]
                transition-all duration-300 lg:hidden
                ${
                  navbarOpen
                    ? "visible translate-y-3 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0"
                }
              `}
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-x-0 top-0 h-px
                  bg-gradient-to-r from-transparent via-[#004DFD]/70 to-transparent
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full
                  bg-[#004DFD]/10 blur-2xl
                "
              />

              <nav>
                <ul className="block space-y-2">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative font-semibold">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          prefetch={true}
                          onClick={() => setNavbarOpen(false)}
                          className={`
                            relative flex items-center justify-center overflow-hidden
                            rounded-xl border px-4 py-3 text-sm
                            transition-all duration-300
                            ${
                              usePathName === menuItem.path
                                ? `
                                  border-[#004DFD]/40
                                  bg-[#0F1B3D]
                                  text-white
                                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,77,253,0.18)]
                                `
                                : `
                                  border-transparent text-slate-300
                                  hover:border-white/10 hover:bg-white/[0.06]
                                  hover:text-white
                                `
                            }
                          `}
                        >
                          <span className="relative z-10">{menuItem.title}</span>
                        </Link>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleSubmenu(index)}
                            className={`
                              flex w-full cursor-pointer items-center justify-between
                              rounded-xl border px-4 py-3 text-sm
                              text-slate-300 transition-all duration-300
                              hover:border-white/10 hover:bg-white/[0.06] hover:text-white
                              ${menuItem.title === "Framework" ? "bg-[#004DFD]/5 text-white border-[#004DFD]/15" : "border-transparent"}
                            `}
                          >
                            <span className="flex items-center gap-2">
                              {menuItem.title}
                              {menuItem.title === "Framework" && (
                                <span className="h-1.5 w-1.5 rounded-full bg-[#004DFD]" />
                              )}
                            </span>

                            <span
                              className={`pl-3 transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                            >
                              <svg width="18" height="18" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>

                          <div
                            className={`mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition-all duration-300 ${
                              openIndex === index
                                ? "block max-h-96 opacity-100"
                                : "hidden max-h-0 opacity-0"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem, submenuIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuIndex}
                                prefetch={true}
                                onClick={() => setNavbarOpen(false)}
                                className="
                                  flex items-center px-5 py-3 text-sm font-medium
                                  text-slate-300 transition-all duration-200
                                  hover:bg-white/[0.06] hover:text-white
                                "
                              >
                                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#004DFD] shadow-[0_0_10px_rgba(0,77,253,0.75)]" />
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                  {/* Dedicated Mobile Dropdown Contact Item */}
                  <li className="pt-2">
                    <Link
                      href="/contact"
                      onClick={() => setNavbarOpen(false)}
                      className="flex w-full items-center justify-center rounded-xl bg-[#004DFD] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#003ec9]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </header>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-xl,
          .backdrop-blur-2xl {
            background-color: rgba(7, 17, 39, 0.96);
          }
        }
      `}</style>
    </>
  );
};

export default Header;