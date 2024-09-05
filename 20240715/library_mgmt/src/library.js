"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Library_name, _Library_address, _Library_books;
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
class Library {
    constructor(libraryDetails) {
        _Library_name.set(this, void 0);
        _Library_address.set(this, void 0);
        _Library_books.set(this, void 0);
        __classPrivateFieldSet(this, _Library_name, libraryDetails.name, "f");
        __classPrivateFieldSet(this, _Library_address, libraryDetails.address, "f");
        __classPrivateFieldSet(this, _Library_books, [], "f");
    }
    addBook(bookDetails) {
        const book = new book_1.Book(bookDetails);
        __classPrivateFieldGet(this, _Library_books, "f").push(book);
        return __classPrivateFieldGet(this, _Library_books, "f");
    }
    removeBook(bookTitle) {
        return __classPrivateFieldSet(this, _Library_books, __classPrivateFieldGet(this, _Library_books, "f").filter(book => book.title !== bookTitle), "f");
    }
    getBooks() {
        if (__classPrivateFieldGet(this, _Library_books, "f").length === 0) {
            return "No books are available currently.";
        }
        return (__classPrivateFieldGet(this, _Library_books, "f").map(book => book.getBookDetails()));
    }
    get name() {
        return __classPrivateFieldGet(this, _Library_name, "f");
    }
}
_Library_name = new WeakMap(), _Library_address = new WeakMap(), _Library_books = new WeakMap();
// TESTS
const library = new Library({ name: "City Library", address: "123 Main St" });
library.addBook({ title: "1984", author: "George Orwell", publishedYear: 1949, genre: "Fiction" });
library.addBook({ title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011, genre: "Non-Fiction" });
library.addBook({ title: "Digital Fortress", author: "Dan Brown", publishedYear: 1998, genre: "Fiction", format: "PDF", fileSize: 5 });
library.addBook({ title: "Becoming", author: "Michelle Obama", publishedYear: 2018, genre: "Biography", format: "AUDIO", fileSize: 200, duration: 1140, narrator: "Michelle Obama" });
console.log(library.getBooks());
library.removeBook("1984");
console.log(`Books available at the ${library.name}: ${JSON.stringify(library.getBooks())}`);
