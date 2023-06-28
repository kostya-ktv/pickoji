"use client";
import cards from "@/util/data.json";
import Input from "@/components/Input";
import Cards from "./Cards";

const EmojiSearch = () => {
  return (
    <div
      className="
    flex 
    flex-col
    gap-y-5
    w-[100%] 
    mt-3 
    relative
    p-3
    overflow-auto
    "
    >
      <Input placeholder="Search for a keywords..." />
      <Cards cards={cards.splice(0, 10)} />
    </div>
  );
};
export default EmojiSearch;
