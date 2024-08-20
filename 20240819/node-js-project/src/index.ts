import http from "http";
import { port } from "./config";
import { greeting, message } from "./helpers";
import { logServerMessage } from "./logger";

http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/plain"});
  // res.end("Server is running!");
  res.writeHead(200, { "Content-Type": "text/plain"});
  res.end(`${greeting()} ${message()}`);

}).listen(port, () => logServerMessage(`The server is running on port ${port}`));