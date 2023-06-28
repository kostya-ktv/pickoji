"use client";
import { twMerge } from "tailwind-merge";
import "./box.css";

interface BoxProps {
  className?: string;
  children: React.ReactNode;
  onClick?: Function;
}
const Box: React.FC<BoxProps> = ({ className, onClick, children }) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={twMerge(
        `
        box
        relative
        bg-[color:var(--bgElement)]
        p-2
        rounded-lg

  `,
        className
      )}
    >
      {children}
    </div>
  );
};
export default Box;
