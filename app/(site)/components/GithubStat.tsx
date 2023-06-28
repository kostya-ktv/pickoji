"use client";
import GitHubButton from "react-github-btn";
import { useThemeContext } from "@/providers/ThemeProvider";

const GithubStat = () => {
  const { theme } = useThemeContext();
  return (
    <div className="flex gap-x-2">
      <GitHubButton
        href="https://github.com/kostya-ktv/pickoji"
        data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Stars kostya-ktv/pickoji"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/kostya-ktv/pickoji"
        data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork kostya-ktv/pickoji"
      >
        Fork
      </GitHubButton>
    </div>
  );
};
export default GithubStat;
