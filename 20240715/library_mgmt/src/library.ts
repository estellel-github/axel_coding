import { Genre, IBookDetails, IAudioBookDetails, IDigitalBookDetails } from "./types";
import { Book } from "./book";

interface LibraryDetails {
  name: string;
  address: string;
}

class Library {
  #name: string;
  #address: string;
  #books: Book[];

  constructor(libraryDetails: LibraryDetails) {
    this.#name = libraryDetails.name;
    this.#address = libraryDetails.address;
    this.#books = [];
  }

  addBook(bookDetails: IBookDetails | IDigitalBookDetails | IAudioBookDetails ): Book[] {
    const book = new Book(bookDetails);
    this.#books.push(book);
    return this.#books;
  }

  removeBook(bookTitle: string): Book[] {
    return this.#books = this.#books.filter(book => book.getTitle !== bookTitle);
  }

  getBooks(): IBookDetails[] | string {
    if (this.#books.length === 0) {
      return "No books are available currently.";
    }
    return (this.#books.map(book => book.getBookDetails()));
  }

  get getName() {
    return this.#name;
  }
}

// TESTS

const library = new Library({ name: "City Library", address: "123 Main St" });

library.addBook({ title: "1984", author: "George Orwell", publishedYear: 1949, genre: "Fiction" });
library.addBook({ title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011, genre: "Non-Fiction" });
library.addBook({ title: "Digital Fortress", author: "Dan Brown", publishedYear: 1998, genre: "Fiction", format: "PDF", fileSize: 5 });
library.addBook({ title: "Becoming", author: "Michelle Obama", publishedYear: 2018, genre: "Biography", format: "AUDIO", fileSize: 200, duration: 1140, narrator: "Michelle Obama" });

console.log(library.getBooks());

library.removeBook("1984");

console.log(`Books available at the ${library.getName}: ${JSON.stringify(library.getBooks())}`);