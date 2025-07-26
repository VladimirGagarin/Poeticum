export function LovePoem() {
  const poem = {
    id: "love-01", // unique ID (for routing or lookup)
    title: "When Ember Touched Silk",
    category: "Love",
    author: "Kevo Poetica", // or leave empty for anonymous
    language: "English", // or "Greek", "French", etc.
    tags: ["intimacy", "gentle", "longing"], // optional
    text :  [
      { verse["You arrived like hush in a thunderstorm,",
      "Smoothing the skies that wrinkled my soul.",
      "Each breath you gave wore the scent of silence,",
      "And I loved you in the spaces between fire and fold."]}
        
    ]
    createdAt: "2025-07-26", // optional date string
    style: "Curly Script", // or "Minimal", etc. (for UI themes later)
    mood: "Warm", // for filtering or coloring
  };

  return poem;
}
