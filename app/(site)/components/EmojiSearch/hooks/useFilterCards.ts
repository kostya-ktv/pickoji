import { useMemo, useState } from "react";
import cards from "@/util/data.json";

const useFilterCards = () => {
    const [filterState, setFilterState] = useState<string>("");

    const filteredCards = useMemo(() => {
        if (!filterState) return cards
        return [...cards].filter(card => card.
            keywords
            .toLowerCase()
            .includes(filterState.toLowerCase())
            || card.title
            .toLowerCase()
            .includes(filterState.toLowerCase())
        )
    },[filterState])
    return {
        filteredCards, filterState,setFilterState
    }
}
export default useFilterCards