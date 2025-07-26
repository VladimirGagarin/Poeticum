import { poemDetails } from "../components/PoemDetails";
import { PoetCard } from "./PoetCard";
import "../App.css"

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
      <div className="poem-card">
        {allPoems.map((poem, index) => (
          <PoetCard key={poem.poemId || index} poemObj={poem} />
        ))}
      </div>
    );
}