import { Book } from "./book";
import { digitalBooks, DigitalBookFormat, IDigitalBookDetails, Genre } from "./types";

export class DigitalBook extends Book {
  private _format: DigitalBookFormat;
  private _fileSize: number;

  constructor(digitalBookDetails: IDigitalBookDetails) {
    super(digitalBookDetails);
    this._format = digitalBookDetails.format;
    this._fileSize = digitalBookDetails.fileSize;
  }

  get format(): DigitalBookFormat {
    return this._format;
  }

  set setFormat(formatInput: DigitalBookFormat) {
    if (digitalBooks.includes(formatInput)) {
      this._format = formatInput;
    }
    else {
      this._format = "N/A";
    }
  }

  get fileSize(): number {
    return this._fileSize;
  }

  set setFileSize(fileSizeInput: number) {
    this._fileSize = fileSizeInput;
  }

  override getBookDetails(): IDigitalBookDetails {
    return {
      ...super.getBookDetails(),
      format: this._format,
      fileSize: this._fileSize,
    }
  }
}