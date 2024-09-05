"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.greeting = void 0;
const config_1 = require("./config");
const greeting = () => {
    return "Hello from the helper module!";
};
exports.greeting = greeting;
const message = () => {
    return config_1.customMessage;
};
exports.message = message;
