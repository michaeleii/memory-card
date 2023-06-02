import hellokittyImg from "./assets/hellokitty.png";
import cinnamonrollImg from "./assets/cinnamonroll.png";
import melodyImg from "./assets/melody.png";
import kuromiImg from "./assets/kuromi.png";
import keroppiImg from "./assets/keroppi.png";
import pompompurinImg from "./assets/pompompurin.png";
import useStore from "./store";
import Card from "./components/Card";

const cardImages = [
  {
    name: "hellokitty",
    img: hellokittyImg,
  },
  {
    name: "cinnamonroll",
    img: cinnamonrollImg,
  },
  {
    name: "melody",
    img: melodyImg,
  },
  {
    name: "kuromi",
    img: kuromiImg,
  },
  {
    name: "keroppi",
    img: keroppiImg,
  },
  {
    name: "pompompurin",
    img: pompompurinImg,
  },
];

function App() {
  const [cards, setCards, turns, setTurns] = useStore((state) => [
    state.cards,
    state.setCards,
    state.turns,
    state.setTurns,
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
    console.log({
      shuffledCards,
      turns,
    });
  };
  return (
    <div className="p-10 text-center">
      <h1 className="mb-10 text-5xl font-bold">Memory Game</h1>
      <button
        className="rounded-lg border-2 border-white p-2 transition-colors hover:bg-pink-500"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="mx-auto mt-10 grid max-w-3xl  grid-cols-2 gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
