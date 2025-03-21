import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const gameFilters = z.object({
  genres: z.array(z.string()).optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  minRating: z.number().optional(),
  page: z.number().optional(),
  pageSize: z.number().optional(),
});

export type GameFilters = z.infer<typeof gameFilters>;

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: Array<{id: number; name: string}>;
  description: string;
  price?: number;
}
