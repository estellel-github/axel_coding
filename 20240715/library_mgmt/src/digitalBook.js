"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const book_1 = require("./book");
class DigitalBook extends book_1.Book {
    constructor(digitalBookDetails) {
        super(digitalBookDetails);
        this._format = digitalBookDetails.format;
        this._fileSize = digitalBookDetails.fileSize;
    }
    get getFormat() {
        return this._format;
    }
    set setFormat(formatInput) {
        this._format = formatInput;
    }
    get getFileSize() {
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
