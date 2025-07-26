import "../index.css";

export function PoetCard({ poemObj }) {
  const { title, author, category } = poemObj;

 

  return (
    <div className="poet-card">
      <div className="poet-card-header">
        <h2 className="poem-title">{title}</h2>
        <p className="poem-category">{category}</p>
      </div>


      <div className="poet-card-footer">
        <span className="poem-author">by {author || "Anonymous"}</span>
        {/* Add link or button later to open full poem */}
      </div>
    </div>
  );
}
