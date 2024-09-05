"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
const digitalBook_1 = require("./digitalBook");
class AudioBook extends digitalBook_1.DigitalBook {
    constructor(audioBookDetails) {
        super(audioBookDetails);
        this._duration = audioBookDetails.duration;
        this._narrator = audioBookDetails.narrator;
    }
    get duration() {
        return this._duration;
    }
    set duration(durationInput) {
        this._duration = durationInput;
    }
    get narrator() {
        return this._narrator;
    }
    set narrator(narratorInput) {
        this._narrator = narratorInput;
    }
}
exports.AudioBook = AudioBook;
