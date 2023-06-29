import {useCallback, useState} from "react";
import {ICard} from "@/util/types";
import {StorageService} from "@/services/storage.service";
import {useHistoryCards} from "@/providers/EmojiHistoryProvider";

const useSaveEmoji = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const {pushEmojiToHistory} = useHistoryCards()

    const handleSave = useCallback(async (emoji: ICard) => {
        setIsCopied(true);
        await navigator.clipboard.writeText(emoji.symbol);
        const timeout = setTimeout(() => setIsCopied(false), 2000);
        pushEmojiToHistory(emoji)
        return () => clearTimeout(timeout);
    },[pushEmojiToHistory])

    return {isCopied, handleSave}
}
export default useSaveEmoji