"use client";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { useThemeContext } from "@/providers/ThemeProvider";
import EmojiSearch from "./components/EmojiSearch";
import GithubStat from "./components/GithubStat";

export default function Home() {
  const { theme } = useThemeContext();
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
      <div className="w-[100%] md:w-[500px] items-center flex flex-col gap-y-5">
        <Header />
        <GithubStat />
        <ThemeToggle />
        <EmojiSearch />
      </div>
    </div>
  );
}
