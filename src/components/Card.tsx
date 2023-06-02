import useStore, { Card } from "../store";
import coverImg from "../assets/cover.png";

function Card(card: Card) {
  const [choiceOne, setChoiceOne, choiceTwo, setChoiceTwo] = useStore(
    (state) => [
      state.choiceOne,
      state.setChoiceOne,
      state.choiceTwo,
      state.setChoiceTwo,
    ]
  );
  const handleClick = () => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const flipped = card === choiceOne || card === choiceTwo || card.matched;
  return (
    <div className="relative">
      <div className={flipped ? "flipped" : "relative"}>
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
