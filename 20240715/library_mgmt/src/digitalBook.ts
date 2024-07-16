import { Book } from "./book";
import { DigitalBookFormat, IDigitalBookDetails, Genre } from "./types";

export class DigitalBook extends Book {
  private _format: DigitalBookFormat;
  private _fileSize: number;
  
  constructor(digitalBookDetails: IDigitalBookDetails) {
    super(digitalBookDetails);
    this._format = digitalBookDetails.format;
    this._fileSize = digitalBookDetails.fileSize;
  }

  get getFormat(): DigitalBookFormat {
    return this._format;
  }

  set setFormat(formatInput: DigitalBookFormat) {
    this._format = formatInput;
  }

  get getFileSize(): number {
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