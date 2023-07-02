import {ICard} from "@/util/types";
import {twMerge} from "tailwind-merge";
import Box from "@/components/Box/Box";
import useSaveEmoji from "@/components/Card/hooks/useSaveEmoji";
import React from "react";
import '@/components/Card/card.css'
const HistoryCard:React.FC<{emojiCard: ICard}> = ({emojiCard}) => {

    const {isCopied, handleSave} = useSaveEmoji()
    return (
        <Box
            onClick={() => handleSave(emojiCard)}
            className="cursor-pointer relative"
        >
            {emojiCard.symbol}
            <div
                className={twMerge(`
                            absolute
                            opacity-0
                            bg-[color:var(--bgElement)]
                            w-full
                            h-full
                            rounded-full
                            top-0
                            left-0
                              flex
                              items-center
                              text-[11px]
                              justify-center`,isCopied && "animate-wiggle")}>
                V
            </div>
        </Box>
    )
}
export default  HistoryCard