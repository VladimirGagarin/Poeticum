import { LovePoem, PerplexityPoem } from "./PoemData";

export const poemDetails = [
  {
    poemId: "Love_poem",
    poem: LovePoem(),
    title: "When Ember Touched Silk",
    category: "Romantic",
  },
    {
        poemId: "Perpex_poem",
        poem: PerplexityPoem(),
        title: PerplexityPoem().title,
        category: PerplexityPoem().category,
  }
];