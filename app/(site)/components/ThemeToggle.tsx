"use client";
import Moon from "@/public/images/moon.svg";
import Sun from "@/public/images/sun.svg";
import Box from "@/components/Box/Box";
import Image from "next/image";
import { useCallback, useContext, useMemo } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { twMerge } from "tailwind-merge";

const ThemeToggle = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const isDark = useMemo(() => theme === "dark", [theme]);

  const handleClick = useCallback(
    () => setTheme(isDark ? "light" : "dark"),
    [isDark, setTheme]
  );

  const icon = isDark ? Moon : Sun;
  return (
    <div
      onClick={handleClick}
      className=" 
      flex 
      flex-col
      justify-center
      items-center
      cursor-pointer
      gap-y-2
    "
    >
      <Box className="rounded-full">
        <div className="flex gap-x-3">
          <div
            className={twMerge(
              `h-4 w-4 bg-neutral-500 rounded-full transition duration-300`,
              !isDark && "translate-x-[28px] bg-neutral-700"
            )}
          ></div>
          <div
            className={twMerge(
              `h-4 w-4 relative transition duration-300`,
              !isDark && "translate-x-[-28px]"
            )}
          >
            <Image className="object-cover" src={icon} alt="img" />
          </div>
        </div>
      </Box>
      <p className="text-[10px]">Switch to your preferred theme.</p>
    </div>
  );
};
export default ThemeToggle;
