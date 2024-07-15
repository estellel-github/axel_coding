import { Genre, BookDetails } from "./types";
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

  addBook(bookDetails: BookDetails): Book[] {
    const book = new Book(bookDetails);
    this.#books.push(book);
    return this.#books;
  }

  removeBook(bookTitle: string): Book[] {
    return this.#books = this.#books.filter(book => book.getTitle !== bookTitle);
  }

  getBooks(): BookDetails[] {
    return this.#books.map(book => book.getBookDetails());
  }

}

// TESTS

const library = new Library({ name: 'City Library', address: '123 Main St' });


library.addBook({ title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Fiction' });
library.addBook({ title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction' });


console.log(library.getBooks());


library.removeBook('1984');


console.log(library.getBooks());
