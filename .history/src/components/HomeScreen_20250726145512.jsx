import { poemDetails } from "../components/PoemDetails";
import { PoetCard } from "./PoetCard";

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
        <>
            {allPoems.map(poemobj => (
               <PoetCard p
           ))}
        </>
    )
}