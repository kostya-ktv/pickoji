"use client";
import { useContext } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "@/providers/ThemeProvider";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme} h-[100vh] p-5 pt-14 flex flex-col gap-y-5`}>
      <Header />
      <ThemeToggle />
    </div>
  );
}
