"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const book_1 = require("./book");
const types_1 = require("./types");
class DigitalBook extends book_1.Book {
    constructor(digitalBookDetails) {
        super(digitalBookDetails);
        this._format = digitalBookDetails.format;
        this._fileSize = digitalBookDetails.fileSize;
    }
    get format() {
        return this._format;
    }
    set setFormat(formatInput) {
        if (types_1.digitalBooks.includes(formatInput)) {
            this._format = formatInput;
        }
        else {
            this._format = "N/A";
        }
    }
    get fileSize() {
        return this._fileSize;
    }
    set setFileSize(fileSizeInput) {
        this._fileSize = fileSizeInput;
    }
    getBookDetails() {
        return Object.assign(Object.assign({}, super.getBookDetails()), { format: this._format, fileSize: this._fileSize });
    }
}
exports.DigitalBook = DigitalBook;
