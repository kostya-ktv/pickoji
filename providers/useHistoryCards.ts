import {useContext} from "react";
import {EmojiHistoryContext} from "./EmojiHistoryProvider";

export const useHistoryCards = () => useContext(EmojiHistoryContext);
