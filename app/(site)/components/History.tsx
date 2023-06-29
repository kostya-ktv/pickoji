import {useHistoryCards} from "@/providers/EmojiHistoryProvider";
import Box from "@/components/Box/Box"

const History = () => {
    const {emojiHistory} = useHistoryCards()

    return emojiHistory && emojiHistory?.length > 0 ? (
        <div className="flex flex-col">
            <p className="text-center text-[10px] text-[color:var(--fontColor)]">History:</p>
            <div className="flex gap-x-2">
                {emojiHistory.map((emoji,i) => <Box className="" key={i}>{emoji.symbol}</Box>)}
            </div>
        </div>
    ) : null
}
export default History