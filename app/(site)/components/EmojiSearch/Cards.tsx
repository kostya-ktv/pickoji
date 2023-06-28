import Card from "@/components/Card/Card";
import { ICard } from "@/util/types";
import { useEffect, useMemo, useRef, useState } from "react";
import UpIcon from "@/public/images/up.svg";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface Props {
  cards: Array<ICard>;
}

const Cards: React.FC<Props> = ({ cards }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShowScrollUp, setIsShowScrollUp] = useState<boolean>(false);
  const handleClick = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref!.current!.scrollTop > 300) setIsShowScrollUp(true);
      else setIsShowScrollUp(false);
    };
    if (ref) {
      ref.current?.addEventListener("scroll", handleScroll);
      return () => ref.current?.removeEventListener("scroll", handleScroll);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="
      overflow-auto
      flex flex-wrap
      gap-x-5
      gap-y-5
      justify-evenly
      p-4
    "
    >
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
      <div
        onClick={handleClick}
        className={twMerge(
          `
      h-5
      w-5
      cursor-pointer
      absolute
      bottom-0
      right-0
      bg-[color:var(--bgElement)]
      rounded-full
      `,
          !isShowScrollUp && "hidden"
        )}
      >
        <Image className="object-cover" src={UpIcon} alt="img" />
      </div>
    </div>
  );
};
export default Cards;
