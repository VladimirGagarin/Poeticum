import "../index.css";

export function PoetCard({ poemObj }) {
  const { title, author, category, text, id } = poemObj;

  // Get first 1–2 lines as a preview
  const previewLines = text?.[0]?.verse?.slice(0, 2)?.join(" ") || "";

  return (
    <div className="poet-card">
      <div className="poet-card-header">
        <h2 className="poem-title">{title}</h2>
        <p className="poem-category">{category}</p>
      </div>

      <p className="poem-preview">"{previewLines}..."</p>

      <div className="poet-card-footer">
        <span className="poem-author">by {author || "Anonymous"}</span>
        {/* Add link or button later to open full poem */}
      </div>
    </div>
  );
}
