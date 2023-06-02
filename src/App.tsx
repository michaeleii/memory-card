import "./App.css";

import hellokittyImg from "./assets/hellokitty.png";
import cinnamonrollImg from "./assets/cinnamonroll.png";
import melodyImg from "./assets/melody.png";
import kuromiImg from "./assets/kuromi.png";
import keroppiImg from "./assets/keroppi.png";
import pompompurinImg from "./assets/pompompurin.png";
import badtzImg from "./assets/badtz.png";

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
  {
    name: "badtz",
    img: badtzImg,
  },
];

function App() {
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .map((card) => ({
        ...card,
        id: crypto.randomUUID(),
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
    return shuffledCards;
  };
  return (
    <div className="p-10 text-center">
      <h1 className="mb-10 text-5xl font-bold">Memory Game</h1>
      <button className="rounded-lg border-2 border-white p-2 transition-colors hover:bg-pink-500">
        New Game
      </button>
    </div>
  );
}

export default App;
