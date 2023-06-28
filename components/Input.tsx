"use client";

import Box from "./Box/Box";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
const Input: React.FC<Props> = ({ className, ...restProps }) => {
  return (
    <Box
      className="
      p-0
      w-[100%]
      border-[color:var(--bgElement)]
      transition-colors
      delay-200
     border-2
     hover:border-neutral-200
     "
    >
      <input
        {...restProps}
        className={twMerge(
          `
          bg-[color:var(--bgElement)]
          w-[100%] 
          px-5
          py-2   
          rounded-md
          text-[14px]
          focus:outline-none 
        focus:border-white 
        focus:ring-1 
        focus:ring-white
      `,
          className
        )}
      />
    </Box>
  );
};
export default Input;
