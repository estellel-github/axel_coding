import { Book } from "./book";
import { DigitalBookFormat, IDigitalBookDetails, IAudioBookDetails, Genre } from "./types";
import { DigitalBook } from "./digitalBook";

export class AudioBook extends DigitalBook {
  private _duration: number;
  private _narrator: string;

  constructor(audioBookDetails: IAudioBookDetails) {
    super(audioBookDetails);
    this._duration = audioBookDetails.duration;
    this._narrator = audioBookDetails.narrator;
  }

  get getDuration(): number {
    return this._duration;
  }

  set setDuration(durationInput: number) {
    this._duration = durationInput;
  }

  get getNarrator(): string {
    return this._narrator;
  }

  set setNarrator(narratorInput: string) {
    this._narrator = narratorInput;
  }

}