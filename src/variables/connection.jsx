import io from "socket.io-client";
import HOST from "variables/hostUrl";
var socket = io(HOST);
export { socket };
