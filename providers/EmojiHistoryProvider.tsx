"use client";
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {StorageService} from "@/services/storage.service";
import {ICard} from "@/util/types";
import card from "@/components/Card/Card";


const EmojiHistoryContext = createContext<{
    emojiHistory?: ICard[];
    pushEmojiToHistory: (card: ICard) => void;
}>(null as any);

export const useHistoryCards = () => useContext(EmojiHistoryContext);

interface  Props { children: React.ReactNode }
const EmojiHistoryProvider: React.FC<Props> = ({children}) => {
    const [emojiHistory, setEmojiHistory] = useState<ICard[]>([]);

    useEffect(() => {
        const cards = StorageService.getSavedEmojiCards()
        setEmojiHistory(cards)
    },[])

    const pushEmojiToHistory = useCallback((emojiCard: ICard) => {
        const isExists = emojiHistory.find(card => card.title === emojiCard.title && card.symbol === emojiCard.symbol)
        if (!isExists) {
            const cards = [...emojiHistory]

            if (cards.length === 6) {
                cards.pop()
            }
            cards.unshift(emojiCard)
            setEmojiHistory(cards)
            StorageService.saveEmojiCards(cards)
        }

    },[emojiHistory])

    const toProvide = useMemo(() => ({ emojiHistory, pushEmojiToHistory}), [emojiHistory, pushEmojiToHistory]);

    return (
        <EmojiHistoryContext.Provider value={toProvide}>{children}</EmojiHistoryContext.Provider>
    );
};
export default EmojiHistoryProvider;
