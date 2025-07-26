import { poemDetails } from "../components/PoemDetails";
import { PoetCard } from "./PoetCard";

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
      <div className="">
        {allPoems.map((poem, index) => (
          <PoetCard key={poem.poemId || index} poemObj={poem} />
        ))}
      </div>
    );
}