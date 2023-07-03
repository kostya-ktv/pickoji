import {useHistoryCards} from "@/providers/useHistoryCards";
import HistoryCard from "@/app/(site)/components/History/HistoryCard";

const History = () => {
    const {emojiHistory} = useHistoryCards()

    return emojiHistory && emojiHistory?.length > 0 ? (
        <div className="flex flex-col">
            <p className="text-center text-[10px] text-[color:var(--fontColor)]">History:</p>
            <div className="flex gap-x-2">
                {emojiHistory.map((emoji,i) => <HistoryCard emojiCard={emoji} key={i}/>)}
            </div>
        </div>
    ) : null
}
export default History