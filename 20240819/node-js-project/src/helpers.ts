import { customMessage } from "./config";

export const greeting = () : string => {
  return "Hello from the helper module!";
}

export const message = () : string => {
  return customMessage;
}