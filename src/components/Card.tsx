import useStore, { Card } from "../store";
import coverImg from "../assets/cover.png";

function Card(card: Card) {
  const [choiceOne, setChoiceOne, setChoiceTwo] = useStore((state) => [
    state.choiceOne,
    state.setChoiceOne,
    state.setChoiceTwo,
  ]);
  const handleClick = () => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  return (
    <div className="relative">
      <div>
        <img
          src={card.img}
          alt={card.name}
          className="block w-full rounded-md border-2 border-white"
        />
        <img
          src={coverImg}
          alt="card back"
          className="block w-full rounded-md border-2 border-white"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default Card;
