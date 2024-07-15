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
var _Book_title, _Book_author, _Book_publishedYear, _Book_genre;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.validGenres = void 0;
exports.validGenres = ["Fiction", "Non-Fiction", "Science", "Biography", "N/A"];
class Book {
    constructor(bookDetails) {
        _Book_title.set(this, void 0);
        _Book_author.set(this, void 0);
        _Book_publishedYear.set(this, void 0);
        _Book_genre.set(this, void 0);
        __classPrivateFieldSet(this, _Book_title, bookDetails.title, "f");
        __classPrivateFieldSet(this, _Book_author, bookDetails.author, "f");
        __classPrivateFieldSet(this, _Book_publishedYear, bookDetails.publishedYear, "f");
        __classPrivateFieldSet(this, _Book_genre, bookDetails.genre, "f");
    }
    // Getters and setters
    get getTitle() {
        return __classPrivateFieldGet(this, _Book_title, "f");
    }
    set setTitle(titleInput) {
        if (typeof titleInput === "string") {
            __classPrivateFieldSet(this, _Book_title, titleInput, "f");
        }
        else {
            throw new Error("Please input a title");
        }
    }
    get author() {
        return __classPrivateFieldGet(this, _Book_author, "f");
    }
    set author(authorInput) {
        if (typeof authorInput === "string") {
            __classPrivateFieldSet(this, _Book_author, authorInput, "f");
        }
        else {
            throw new Error("Please input a name for the author");
        }
    }
    get publishedYear() {
        return __classPrivateFieldGet(this, _Book_publishedYear, "f");
    }
    set publishedYear(yearInput) {
        if (yearInput > -800) {
            __classPrivateFieldSet(this, _Book_publishedYear, yearInput, "f");
        }
        else {
            throw new Error("Please input a valid year. The year has been set to 'N/A' for now.");
        }
    }
    get genre() {
        return __classPrivateFieldGet(this, _Book_genre, "f");
    }
    set genre(genreInput) {
        if (exports.validGenres.includes(genreInput)) {
            __classPrivateFieldSet(this, _Book_genre, genreInput, "f");
        }
        else if (typeof genreInput != "string") {
            __classPrivateFieldSet(this, _Book_genre, "N/A", "f");
            throw new Error("Please input a valid genre. The genre has been set to 'N/A' for now.");
        }
    }
    getBookDetails() {
        return {
            title: __classPrivateFieldGet(this, _Book_title, "f"),
            author: __classPrivateFieldGet(this, _Book_author, "f"),
            publishedYear: __classPrivateFieldGet(this, _Book_publishedYear, "f"),
            genre: this.genre,
        };
    }
}
exports.Book = Book;
_Book_title = new WeakMap(), _Book_author = new WeakMap(), _Book_publishedYear = new WeakMap(), _Book_genre = new WeakMap();
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
