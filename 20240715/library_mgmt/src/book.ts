import { Genre, genres, IBookDetails } from './types';


export class Book {

  private _title: string;
  private _author: string;
  private _publishedYear: number;
  private _genre: Genre;

  constructor(bookDetails: IBookDetails = {
    title: "N/A",
    author: "N/A",
    publishedYear: 0,
    genre: "N/A",
  }) {
    this._title = bookDetails.title;
    this._author = bookDetails.author;
    this._publishedYear = bookDetails.publishedYear;
    this._genre = bookDetails.genre;
  }

  // Getters and setters

  get title(): string {
    return this._title;
  }
  set setTitle(titleInput: string) {
    if (typeof titleInput === "string") {
      this._title = titleInput;
    } else {
      console.log("Please input a title");
    }
  }

  get author(): string {
    return this._author;
  }
  set setAuthor(authorInput: string) {
    if (typeof authorInput === "string") {
      this._author = authorInput;
    } else {
      console.log("Please input a name for the author");
    }
  }

  get publishedYear(): number {
    return this._publishedYear;
  }
  set setPublishedYear(yearInput: number) {
    if (yearInput > -800) {
      this._publishedYear = yearInput;
    } else {
      console.log("Please input a valid year.");
    }
  }

  get genre(): Genre {
    return this._genre;
  }

  set setGenre(genreInput: Genre) {
    if (genres.includes(genreInput)) {
      this._genre = genreInput;
    } else {
      this._genre = "N/A";
    }
  }

  getBookDetails() {
    return {
      title: this._title,
      author: this._author,
      publishedYear: this._publishedYear,
      genre: this._genre,
    }
  }
}

// Creating new object + tests

const lilithsBrood = new Book({
  title: "Lilith's Brood",
  author: "Octavia Butler",
  publishedYear: 0,
  genre: "N/A",
});
console.log(`___________________________________________________`);

lilithsBrood.setTitle = "Lilith's Brood - Exogenesis Trilogy";
lilithsBrood.setPublishedYear = 1987;
lilithsBrood.setGenre = "Fiction";

console.log(`___________________________________________________`);
console.log(JSON.stringify(lilithsBrood.getBookDetails()));

const newBook = new Book;

console.log(`___________________________________________________`);
console.log(JSON.stringify(newBook.getBookDetails()));