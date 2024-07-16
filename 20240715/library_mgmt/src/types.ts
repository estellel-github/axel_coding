/* export enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Science = "Science",
  Biography = "Biography",
  NotApplicable = "N/A",
} */

// Replacing ENUM:
// Create array (see constant array/string literals/ as const = tuple with readonly elements)
export const genres = ["Fiction", "Non-Fiction", "Science", "Biography", "N/A"] as const;
// 
export type Genre = typeof genres[number]; // Equivalent to: type Genre = "Fiction" | "Non-fiction" | "Science" | "Biography" | "N/A";

export interface IBookDetails {
  title: string;
  author: string;
  publishedYear: number;
  genre: Genre;
}