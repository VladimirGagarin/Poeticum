import { LovePoem, PerplexityPoem } from "./PoemData";

export const poemDetails = [
  {
    poemId:  LovePoem().id,
    poem: LovePoem(),
    title: LovePoem().title,
    category: "Romantic",
  },
    {
        poemId: PerplexityPoem(),
        poem: PerplexityPoem(),
        title: PerplexityPoem().title,
        category: PerplexityPoem().category,
  }
];