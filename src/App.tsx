import hellokittyImg from "./assets/hellokitty.png";
import cinnamonrollImg from "./assets/cinnamonroll.png";
import melodyImg from "./assets/melody.png";
import kuromiImg from "./assets/kuromi.png";
import keroppiImg from "./assets/keroppi.png";
import pompompurinImg from "./assets/pompompurin.png";
import useStore from "./store";
import Card from "./components/Card";
import { useEffect } from "react";

const cardImages = [
  {
    name: "hellokitty",
    img: hellokittyImg,
    matched: false,
  },
  {
    name: "cinnamonroll",
    img: cinnamonrollImg,
    matched: false,
  },
  {
    name: "melody",
    img: melodyImg,
    matched: false,
  },
  {
    name: "kuromi",
    img: kuromiImg,
    matched: false,
  },
  {
    name: "keroppi",
    img: keroppiImg,
    matched: false,
  },
  {
    name: "pompompurin",
    img: pompompurinImg,
    matched: false,
  },
];

function App() {
  const [
    cards,
    setCards,
    turns,
    setTurns,
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    setDisabled,
  ] = useStore((state) => [
    state.cards,
    state.setCards,
    state.turns,
    state.setTurns,
    state.choiceOne,
    state.setChoiceOne,
    state.choiceTwo,
    state.setChoiceTwo,
    state.setDisabled,
  ]);
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: crypto.randomUUID(),
      }));
    setCards(shuffledCards);
    setTurns(0);
  };
  console.log({
    cards,
    turns,
  });
  const checkMatch = () => {
    if (!(choiceOne && choiceTwo)) {
      return;
    }
    setDisabled(true);
    const isMatch = choiceOne?.img === choiceTwo?.img;
    if (isMatch) {
      setCards(
        cards.map((card) => {
          return card.img === choiceOne?.img
            ? { ...card, matched: true }
            : card;
        })
      );
    }

    setTimeout(() => {
      resetTurn();
    }, 1000);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setTimeout(() => setDisabled(false), 40);
  };

  useEffect(() => {
    checkMatch();
    console.log(cards);
  }, [choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="p-10 text-center">
      <button
        className="rounded-lg border-2 border-white p-2 transition-colors hover:bg-pink-500"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="mx-auto mt-10 grid max-w-3xl  grid-cols-3 gap-5 md:grid-cols-4">
        {cards.map((card) => {
          const props = {
            card,
            flipped: card === choiceOne || card === choiceTwo || card.matched,
          };
          return <Card key={card.id} {...props} />;
        })}
      </div>
      <div className="mt-10">
        <p className="text-2xl">Turns: {turns}</p>
      </div>
    </div>
  );
}

export default App;
