import io from "socket.io-client";

const socket = io("wss://test-chat-backend-hwads.ondigitalocean.app", {
  transports: ["websocket"],
  upgrade: false,
});
const sendData = (from, text) => {
  socket.emit("message", { from, text });
};
export { socket  , sendData };
