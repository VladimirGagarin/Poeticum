import { useParams, use } from "react-router-dom";
import { poemDetails } from "./PoemDetails";
import { useState, useEffect } from "react";

export default function PoemScreen() {
  const { id } = useParams();
  const allPoems = poemDetails;
  const [currentPoemObj, setCurrentPoemObject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundedPoem = allPoems.find((p) => p.id === id);
    if (foundedPoem) {
      setCurrentPoemObject(foundedPoem);
    } else {
      setCurrentPoemObject(null);
    }
    setLoading(false);
  }, [allPoems, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentPoemObj) {
    return <div>Poem not found.</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1>{currentPoemObj.title}</h1>
      <h3>
        <span style={{ color: "#888" }}>{currentPoemObj.author}</span>
        {" | "}
        <span style={{ fontStyle: "italic" }}>{currentPoemObj.category}</span>
      </h3>
      {currentPoemObj.text.map((section, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <div>
            {section.verse.map((line, lineIdx) => (
              <p key={lineIdx} style={{ margin: "0.25rem 0" }}>
                {line}
              </p>
            ))}
          </div>
          {section.meaning && (
            <blockquote
              style={{
                fontStyle: "italic",
                color: "#555",
                marginTop: "1rem",
                borderLeft: "3px solid #ddd",
                paddingLeft: "1rem",
              }}
            >
              {section.meaning}
            </blockquote>
          )}
        </div>
      ))}
    </div>
  );
}
