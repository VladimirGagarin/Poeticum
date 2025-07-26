import { poemDetails } from "../components/PoemDetails";
import { PoetCard } from "./PoetCard";

export default function WelcomeScreen() {
    const allPoems = poemDetails;

    return (
        <>
           ReferenceError: poemobj is not defined
    at WelcomeScreen (http://localhost:5173/src/components/HomeScreen.jsx?t=1753530877273:20:68)
    at react-stack-bottom-frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=2104362c:17422:20)
    at renderWithHooks (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=2104362c:4204:24)
    at updateFunctionComponent (http://localhost:5173/node_modules/
        </>
    )
}