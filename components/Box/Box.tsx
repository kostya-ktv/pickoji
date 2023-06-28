"use client";
import { twMerge } from "tailwind-merge";
import "./box.css";

interface BoxProps {
  className?: string;
  children: React.ReactNode;
}
const Box: React.FC<BoxProps> = ({ className, children }) => {
  return (
    <div
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
