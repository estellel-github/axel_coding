"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServerMessage = void 0;
const logServerMessage = (message) => {
    console.log(new Date().toISOString() + "|" + message);
};
exports.logServerMessage = logServerMessage;
