import "../index.css";
import { Link } from "react-router-dom";

export function PoetCard({ poemObj }) {
  const { title, category, poemId } = poemObj;

  return (
    <Link to={`/poem/${poemId}`} className="poet-card-link">
      <div className="poet-card">
        <div className="poet-card-header">
          <h2 className="poem-title">{title}</h2>
          <span className="poem-category badge">{category}</span>
        </div>
      </div>
    </Link>
  );
}
