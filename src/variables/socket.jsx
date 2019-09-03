import { socket } from "./connection";
const jwt = require("jsonwebtoken");
var findUserHandle = function(user_name, user_handle) {
  if (user_name == user_handle) {
    return true;
  } else {
    return false;
  }
};
var handleSocket = async function() {
  let token_user = localStorage.getItem("accessToken");

  // eslint-disable-next-line no-unused-vars
  let result = await jwt.verify(token_user, "secretkey");
  const { id } = result.user;
  console.log(id);
  socket.emit("room", id);
  // socket.on("server_send_username", data => {
  //   localStorage.setItem("user_name", data);
  // });
  // socket.on("server_send_status", data => {
  //   if (data.length > 0) {
  //     callback(data);
  //   } else {
  //     callback([]);
  //   }
  // });
  // let user_name = localStorage.getItem("user_name");
  // socket.on("server_send_notification", data => {
  //   if (data.noti) {
  //     if (findUserHandle(user_name, data.noti[0].username)) {
  //       callback(data.noti);
  //     }
  //   } else {
  //     callback([]);
  //   }
  // });
};
var clientSendAction = function(action) {
  let access_token = localStorage.getItem("accessToken");
  var data_send_server = {
    access_token: access_token,
    action: action
  };
  socket.emit("client_send_action_import", data_send_server);
};
var handleChangeStatusNoti = function() {
  let user_name = localStorage.getItem("user_name");
  socket.emit("client_change_status", user_name);
};

// eslint-disable-next-line no-unused-vars
var listenNotiFromServer = function(callback) {
  socket.on("notification", response => {
    if (response.length > 0) {
      callback(response);
    } else {
      callback([]);
    }
  });
};

export {
  findUserHandle,
  handleSocket,
  handleChangeStatusNoti,
  clientSendAction,
  listenNotiFromServer
};
