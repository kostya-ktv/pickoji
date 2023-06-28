import Card from "@/components/Card/Card";
import { ICard } from "@/util/types";

interface Props {
  cards: Array<ICard>;
}

const Cards: React.FC<Props> = ({ cards }) => {
  return (
    <div
      className="
    overflow-auto
    flex flex-wrap
    gap-x-5
    gap-y-5
    justify-evenly
    p-4
    "
    >
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
};
export default Cards;
