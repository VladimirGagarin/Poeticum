import { LovePoem, PerplexityPoem } from "./PoemData";

export const poemDetails = [
  {
    poemId:  LovePoem().id,
    poem: LovePoem(),
    title: LovePoem,
    category: "Romantic",
  },
    {
        poemId: "Perpex_poem",
        poem: PerplexityPoem(),
        title: PerplexityPoem().title,
        category: PerplexityPoem().category,
  }
];