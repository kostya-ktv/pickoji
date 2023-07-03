import {useCallback, useState} from "react";
import {ICard} from "@/util/types";
import {useHistoryCards} from "@/providers/useHistoryCards";

const useSaveEmoji = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const {pushEmojiToHistory} = useHistoryCards()

    const handleSave = useCallback(async (emoji: ICard) => {
        setIsCopied(true);
        if(navigator.clipboard) {
            await navigator.clipboard.writeText(emoji.symbol);
        }
        const timeout = setTimeout(() => setIsCopied(false), 2000);
        pushEmojiToHistory(emoji)
        return () => clearTimeout(timeout);
    },[pushEmojiToHistory])

    return {isCopied, handleSave}
}
export default useSaveEmoji