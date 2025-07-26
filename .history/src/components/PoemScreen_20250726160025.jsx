import { useParams } from "react-router-dom";
import {po}
export default function PoemScreen() {
    const { id } = useParams();
    return (
        <>
            <h1>Welcome  Poets.</h1>
        </>
    )
}