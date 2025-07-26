import "../index.css";

export function PoetCard({ poemObj }) {
  const { title, category } = poemObj;

  return (
    <div className="poet-card">
      <div className="poet-card-header">
        <h2 className="poem-title">{title}</h2>
        <p className="poem-category">{category}</p>
      </div>
    </div>
  );
}

