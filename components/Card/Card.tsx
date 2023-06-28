"use client";
import { twMerge } from "tailwind-merge";
import { ICard } from "@/util/types";
import Box from "../Box/Box";
import { useState } from "react";
import "./card.css";

interface Props {
  card: ICard;
}
const Card: React.FC<Props> = ({ card }) => {
  const { symbol, title } = card;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleClick = async (emoji: string) => {
    setIsCopied(true);
    await navigator.clipboard.writeText(emoji);
    const timeout = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timeout);
  };
  return (
    <Box
      onClick={() => !isCopied && handleClick(symbol)}
      className="
      relative
    aspect-square
    w-[100px]
    sm:w-[120px]
    md:w-[130px]
    lg:w-[110px]
    flex
    flex-col
    justify-center
    items-center
    select-none
    cursor-pointer
    transition-transform
    hover:translate-y-[-2px]
    "
    >
      <span
        className="
        text-[34px]
        sm:text-[46px]
        md:text-[55px]
        lg:text-[51px]
      "
      >
        {symbol}
      </span>
      <span
        className="
        font-semibold
        text-center
        text-[11px]

        md:text-[12px]
        lg:text-[13px]
        w-[100%]
        truncate
        relative
      "
      >
        {title}
      </span>
      <div
        className={twMerge(
          `
      copied
      flex
      items-center
      text-[13px]
      lg:text-[18px]
 
      justify-center`,
          isCopied && "animate-wiggle"
        )}
      >
        Copied
      </div>
    </Box>
  );
};
export default Card;
