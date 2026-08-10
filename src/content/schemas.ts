import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "subtitle": z.string(),
      "cta": z.string(),
      "note": z.string()
    }),
    "footer": z.object({
      "copyright": z.string(),
      "link": z.string()
    })
  })
};
export type Schemas = typeof schemas;