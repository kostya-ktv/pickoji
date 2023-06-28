"use client";

import Input from "@/components/Input";
import Cards from "./Cards";
import useFilterCards from "./hooks/useFilterCards";

const EmojiSearch = () => {
  const { filterState, filteredCards, setFilterState } = useFilterCards();
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
      <Input
        onChange={(e) => setFilterState(e.target.value)}
        value={filterState}
        placeholder="Search for a keywords..."
      />
      <Cards cards={filteredCards} />
    </div>
  );
};
export default EmojiSearch;
