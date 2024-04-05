import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket: Socket) => {
  console.log("We got a connection.");

  socket.on("login", ({ name }: { name: string}) => console.log(name, "is trying to log in"));
});

console.log("listening");
httpServer.listen(3000);
