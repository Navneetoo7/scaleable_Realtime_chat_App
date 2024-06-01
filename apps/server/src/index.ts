import http from "http";
import SocketService from "./services/socket";

async function init() {
  const socketService = new SocketService();
  const httpServer = http.createServer();
  socketService.io.attach(httpServer);
  const PORT = process.env.PORT ?? 8000;
  httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  socketService.initListeners();
}
init();
