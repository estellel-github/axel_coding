export type Genre = "Fiction" | "Non-Fiction" | "Science" | "Biography" | "N/A";

export interface BookDetails {
  title: string;
  author: string;
  publishedYear: number;
  genre: Genre;
}