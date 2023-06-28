"use client";
import { useContext } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "@/providers/ThemeProvider";
import EmojiSearch from "./components/EmojiSearch";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`app ${theme} 
      h-[100vh]
      w-[100vw]
      p-5
      pt-14
      flex
      justify-center`}
    >
      <div className="w-[100%] md:w-[500px] flex flex-col gap-y-5">
        <Header />
        <ThemeToggle />
        <EmojiSearch />
      </div>
    </div>
  );
}
