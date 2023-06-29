"use client";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { useThemeContext } from "@/providers/ThemeProvider";
import EmojiSearch from "./components/EmojiSearch/EmojiSearch";
import GithubStat from "./components/GithubStat";
import Footer from "./components/Footer";
import History from "@/app/(site)/components/History";

export default function Home() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`app ${theme} 
      h-[100vh]
      w-[100vw]
      max-h-[100%]
      relative
      overflow-hidden
      p-5
      pt-14
      flex
      justify-center`}
    >
      <div className="w-[100%] md:w-[500px] items-center flex flex-col gap-y-5">
        <Header />
        <GithubStat />

        <History/>
        <EmojiSearch />
        <ThemeToggle />
      </div>
      <Footer />
    </div>
  );
}
