import { useParams } from "react-router-dom";
import { poemDetails } from "./PoemDetails";
import { useState, useEffect } from "react";

export default function PoemScreen() {
    const { id } = useParams();
    const allPoems = poemDetails;
    const [CurrentPoemObj, setCurrrentPoemObject] = useState(null)

    useEffect(() => {
        const foundedPoem = allPoems.find(p => p.poemId === id);

        if (foundedPoem) {
            setCurrrentPoemObject(foundedPoem);
        }
    }, [])

    return (
        <>
            <h1>Welcome  Poets.</h1>
        </>
    )
}