import {ThemeType} from "@/providers/ThemeProvider";
import {ICard} from "@/util/types";

export interface IStorage {
    getItem: any,
    setItem: any,
    clear: any
}
export class StorageService {
    private readonly ThemeKey = 'PickojiTheme'
    private readonly EmojiCardsKey = 'PickojiCards'

    constructor(private readonly storageInstance: IStorage) {
    }
    getTheme(): ThemeType {
        const theme: ThemeType | undefined = this.storageInstance.getItem(this.ThemeKey) as ThemeType
        if(theme) {
            return theme === 'light' ? 'light' : 'dark'
        }
        return  'dark'
    }
    saveTheme(currentTheme: ThemeType):void {
        this.storageInstance.setItem(this.ThemeKey, currentTheme)
    }

    getSavedEmojiCards():ICard[] {
        let value = this.storageInstance.getItem(this.EmojiCardsKey)
        if(value) {
            const cards: ICard[] = JSON.parse(value)
            return cards?.length && cards.length > 0 ? cards : []
        }
        return []
    }
    saveEmojiCards(emojiCards: ICard[]) {
        this.storageInstance.setItem(this.EmojiCardsKey, JSON.stringify(emojiCards))
    }
}
