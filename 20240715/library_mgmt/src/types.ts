export enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Science = "Science",
  Biography = "Biography",
  NotApplicable = "N/A",
}

export interface BookDetails {
  title: string;
  author: string;
  publishedYear: number;
  genre: Genre;
}