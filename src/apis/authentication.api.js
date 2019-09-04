import callApi from "utils/callApi";

const authentication = {
  login(data) {
    return callApi("user/login", "POST", data)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },

  register(data) {
    return callApi("creates-user", "POST", data)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  userInfor() {
    return callApi("user-infor", "GET")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  changepassword(data) {
    return callApi("update-password-user", "PUT", data)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  forgotpassword(data) {
    return callApi("user/forgot-password-sms", "POST", data)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};

export default authentication;
