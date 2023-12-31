"use client";
import {createContext, useContext, useEffect, useMemo, useState} from "react";
import getStorage from "@/services/getStorage";

export type ThemeType = "light" | "dark";

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>(null as any);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toProvide = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    const storedTheme = getStorage().getTheme()
    setTheme(storedTheme)
  },[])
  return (
    <ThemeContext.Provider value={toProvide}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
