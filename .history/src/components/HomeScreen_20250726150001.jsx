import { poemDetails } from "../components/PoemDetails";
import { PoetCard } from "./PoetCard";

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
      <>
        {allPoems.map((poem, index) => (
          <PoetCard key={poem.poemId || index} poemObj={poem} />
        ))}
      </>
    );
}