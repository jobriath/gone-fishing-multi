import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket: Socket) => {
  console.log("We got a connection.");
  socket.on("ping", (...args) => console.log("received", args));
});

console.log("listening");
httpServer.listen(3000);
