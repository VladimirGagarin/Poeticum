import {
  LovePoem,
  PerplexityPoem,
  CopilotPerspectivePoem,
  FoxPoem,
} from "./PoemData";

export const poemDetails = [
  {
    poemId: LovePoem().id,
    poem: LovePoem(),
    title: LovePoem().title,
    category: LovePoem().category,
  },
  {
    poemId: PerplexityPoem().id,
    poem: PerplexityPoem(),
    title: PerplexityPoem().title,
    category: PerplexityPoem().category,
  },
  {
    poemId: CopilotPerspectivePoem().id,
    poem: CopilotPerspectivePoem(),
    title: CopilotPerspectivePoem().title,
    category: CopilotPerspectivePoem().category,
  },
  {
    poemId: FoxPoem().id,
    poem: FoxPoem(),
    title: LovePoem().title,
    category: LovePoem().category,
  },
];