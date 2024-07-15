import { Genre, BookDetails } from './types';

export const validGenres: Genre[] = ["Fiction", "Non-Fiction", "Science", "Biography", "N/A"];

export class Book {

  #title: string;
  #author: string;
  #publishedYear: number;
  #genre: Genre;

  constructor(bookDetails: BookDetails) {
    this.#title = bookDetails.title;
    this.#author = bookDetails.author;
    this.#publishedYear = bookDetails.publishedYear;
    this.#genre = bookDetails.genre;
  }

  // Getters and setters
  get getTitle(): string {
    return this.#title;
  }
  set setTitle(titleInput: string) {
    if (typeof titleInput === "string") {
      this.#title = titleInput;
    } else {
      throw new Error("Please input a title");
    }
  }

  get author(): string {
    return this.#author;
  }
  set author(authorInput: string) {
    if (typeof authorInput === "string") {
      this.#author = authorInput;
    } else {
      throw new Error("Please input a name for the author");
    }
  }

  get publishedYear(): number {
    return this.#publishedYear;
  }
  set publishedYear(yearInput: number) {
    if (yearInput > -800) {
      this.#publishedYear = yearInput;
    } else {
      throw new Error("Please input a valid year. The year has been set to 'N/A' for now.");
    }
  }

  get genre(): Genre {
    return this.#genre;
  }

  set genre(genreInput: Genre) {
    if (validGenres.includes(genreInput)) {
      this.#genre = genreInput;
    }
    else if (typeof genreInput != "string") {
      this.#genre = "N/A";
      throw new Error("Please input a valid genre. The genre has been set to 'N/A' for now.")
    }
  }
  getBookDetails() {
    return {
      title: this.#title,
      author: this.#author,
      publishedYear: this.#publishedYear,
      genre: this.genre,
    }
  }
}

// Creating new object + tests
/* 
const lilithsBrood = new Book({
  title: "Lilith's Brood",
  author: "Octavia Butler",
  publishedYear: 0, 
  genre: "N/A",
});

console.log(`Current state of book: ${JSON.stringify(lilithsBrood.getBookDetails())}`);

try {
  lilithsBrood.publishedYear = 1987;
} catch (error: any) {
  console.error(error.message);
}

console.log(`Current state of book: ${JSON.stringify(lilithsBrood.getBookDetails())}`);

try {
  lilithsBrood.genre = "Fiction";
} catch (error: any) {
  console.error(error.message);
}

console.log(`Current state of book: ${JSON.stringify(lilithsBrood.getBookDetails())}`); */