import {ThemeType} from "@/providers/ThemeProvider";
import {ICard} from "@/util/types";

export class StorageService {
    private static readonly ThemeKey = 'PickojiTheme'
    private static readonly EmojiCardsKey = 'PickojiCards'
    public static getTheme(): ThemeType {
        const theme: ThemeType | undefined = localStorage.getItem(this.ThemeKey) as ThemeType
        if(theme) {
            return theme === 'light' ? 'light' : 'dark'
        }
        return  'dark'
    }
    public static saveTheme(currentTheme: ThemeType):void {
        localStorage.setItem(this.ThemeKey, currentTheme)
    }

    public static getSavedEmojiCards():ICard[] {
        let value = localStorage.getItem(this.EmojiCardsKey)
        if(value) {
            const cards: ICard[] = JSON.parse(value)
            return cards?.length && cards.length > 0 ? cards : []
        }
        return []
    }
    public static saveEmojiCards(emojiCards: ICard[]) {
        localStorage.setItem(this.EmojiCardsKey, JSON.stringify(emojiCards))
    }
}