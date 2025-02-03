"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MainLogo from "@/components/ui/MainLogo";
import { WebMenu } from "@/components/ui/WebMenu";
import SlideInMenu from "@/components/SlideInMenu";
import UserLand from "@/components/ui/UserLand";

export default function StickyMenu() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Define pages where StickyMenu should NOT be displayed
  const hideStickyMenu = ["/auth/login", "/auth/signup", "/auth/reset-password"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If the current path is in the hide list, don't render the menu
  if (hideStickyMenu) return null;

  return (
    <div
      id="menu"
      className={clsx(
        "w-full block transition-all duration-300 bg-white dark:bg-neutral-950",
        isFixed ? "fixed top-0 left-0 right-0 shadow-md z-50 py-4" : "relative py-5"
      )}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <MainLogo />
        <div className="flex items-center gap-x-4">
          <div className="sm:block hidden bg-white dark:bg-neutral-950 p-2 px-6 rounded-full">
            <WebMenu />
          </div>
        </div>
        <div className="sm:flex items-center gap-x-3 hidden">
          <UserLand />
        </div>
        <div className="sm:hidden block">
          123456
          {/* <SlideInMenu /> */}
        </div>
      </div>
    </div>
  );
}
