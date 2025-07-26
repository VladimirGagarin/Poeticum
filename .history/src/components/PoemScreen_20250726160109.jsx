import { useParams } from "react-router-dom";
import { poemDetails } from "./PoemDetails";
import { useState } from "react";

export default function PoemScreen() {
    const { id } = useParams();
    const allPoems = poemDetails;

    return (
        <>
            <h1>Welcome  Poets.</h1>
        </>
    )
}