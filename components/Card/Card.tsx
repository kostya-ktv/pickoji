"use client";

import { ICard } from "@/util/types";
import Box from "../Box/Box";

interface Props {
  card: ICard;
}
const Card: React.FC<Props> = ({ card }) => {
  const { keywords, symbol, title } = card;
  return (
    <Box
      className="
    aspect-square
    w-[100px]
    sm:w-[150px]
    md:w-[170px]
    lg:w-[190px]
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
        sm:text-[14px]
        md:text-[15px]
        lg:text-[19px]
        w-[100%]
        truncate
        relative
      "
      >
        {title}
      </span>
    </Box>
  );
};
export default Card;
