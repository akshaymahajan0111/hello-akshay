import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "description": z.string(),
      "button": z.string(),
      "response": z.string()
    })
  })
};
export type Schemas = typeof schemas;