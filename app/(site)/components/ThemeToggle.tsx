"use client";
import Moon from "@/public/images/moon.svg";
import Sun from "@/public/images/sun.svg";
import Box from "@/components/Box/Box";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { useThemeContext } from "@/providers/ThemeProvider";
import { twMerge } from "tailwind-merge";
import {StorageService} from "@/services/storage.service";

const ThemeToggle = () => {
  const { setTheme, theme } = useThemeContext();
  const isDark = useMemo(() => theme === "dark", [theme]);

  const handleClick = useCallback(
    () => {
      const toSet = isDark ? "light" : "dark"
      setTheme(toSet)
      StorageService.saveTheme(toSet)
    },
    [isDark, setTheme]
  );

  const icon = isDark ? Moon : Sun;
  return (
    <div
      onClick={handleClick}
      className=" 
      absolute
      top-2
      right-2
      flex
      justify-center
      items-center
      cursor-pointer
      gap-x-2
    "
    >
      <p
        className="text-[10px]
    
      "
      >
        Switch to your preferred theme
      </p>
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
    </div>
  );
};
export default ThemeToggle;
