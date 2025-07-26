import { poemDetails } from "../components/PoemDetails";

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
        <>
            {allPoems.map(poemobj => (
               
           ))}
        </>
    )
}