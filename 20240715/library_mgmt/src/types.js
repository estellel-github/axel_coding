"use strict";
/* export enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Science = "Science",
  Biography = "Biography",
  NotApplicable = "N/A",
} */
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalBooks = exports.genres = void 0;
// Replacing ENUM:
// Create array (see constant array/string literals/ as const = tuple with readonly elements)
exports.genres = ["Fiction", "Non-Fiction", "Science", "Biography", "N/A"];
exports.digitalBooks = ["PDF", "EPUB", "MOBI", "AUDIO", "N/A"];
