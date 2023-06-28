"use client";
import { createContext, useMemo, useState } from "react";

type ThemeType = "light" | "dark";

export const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>(null as any);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toProvide = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={toProvide}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
